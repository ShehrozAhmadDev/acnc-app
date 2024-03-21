import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../../redux/store';
import {IAddOnItem, ICartItem} from '../../../types';
import {setCart} from '../../../redux/features/cart-slice';
import { Button } from '../../ui/button';
import Icon from 'react-native-vector-icons/FontAwesome';

interface AddtoCartModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const AddToCartModal: React.FC<AddtoCartModalProps> = ({
  isOpen,
  closeModal,
}) => {
  const dispatch = useDispatch();
  const selectedItem = useAppSelector(
    state => state.cartReducer.value.selectedItem,
  );
  const addons = useAppSelector(state => state.addonReducer.value.addons);
  const [quantity, setQuantity] = useState<number>(1);
  const [flag, setFlag] = useState(1);
  const [newAddons, setNewAddons] = useState<
    {addon: IAddOnItem; quantity: number}[]
  >([]);
  const {items: cartItems} = useAppSelector(state => state.cartReducer.value);
  const updateQty = (action: 'add' | 'remove') => {
    if (action === 'add') {
      setQuantity(quantity + 1);
    } else if (action === 'remove') {
      if (quantity !== 1) setQuantity(quantity - 1);
    }
  };

  const updateAddon = (action: 'add' | 'remove', addonId: string) => {
    if (action === 'add') {
      // Check if the addon already exists in newAddons
      const existingAddonIndex = newAddons.findIndex(
        addon => addon.addon._id === addonId,
      );

      if (existingAddonIndex !== -1) {
        // If the addon already exists, increment its quantity
        const updatedAddons = [...newAddons];
        updatedAddons[existingAddonIndex].quantity++;
        setNewAddons(updatedAddons);
      } else {
        // If the addon does not exist, add it to newAddons with quantity 1
        const addonToAdd = addons.find(addon => addon._id === addonId);
        if (addonToAdd) {
          setNewAddons([...newAddons, {addon: addonToAdd, quantity: 1}]);
        }
      }
    } else if (action === 'remove') {
      // Check if the addon exists in newAddons
      const existingAddonIndex = newAddons.findIndex(
        addon => addon.addon._id === addonId,
      );

      if (existingAddonIndex !== -1) {
        const updatedAddons = [...newAddons];
        if (updatedAddons[existingAddonIndex].quantity > 1) {
          // If the addon quantity is greater than 1, decrement its quantity
          updatedAddons[existingAddonIndex].quantity--;
          setNewAddons(updatedAddons);
        } else {
          // If the addon quantity is 1, remove it from newAddons
          updatedAddons.splice(existingAddonIndex, 1);
          setNewAddons(updatedAddons);
        }
      }
    }
  };

  const cartDispatch = (items: ICartItem[]) => {
    dispatch(setCart(items));
  };

  const updateCartQty = () => {
    const updatedItems = cartItems.map(cartItem => {
      if (cartItem.item._id === selectedItem?.item._id) {
        return {
          ...cartItem,
          quantity: quantity,
          addOns: newAddons.map(addon => {
            return {addOnId: addon.addon, quantity: addon.quantity};
          }),
        };
      }
      return cartItem;
    });

    if (!updatedItems.some(item => item.item._id === selectedItem?.item._id)) {
      if (selectedItem)
        updatedItems.push({
          item: selectedItem?.item,
          quantity: quantity,
          addOns: newAddons.map(addon => {
            return {addOnId: addon.addon, quantity: addon.quantity};
          }),
        });
    }

    setFlag(flag + 1);
    cartDispatch(updatedItems);
    setNewAddons([]);
    closeModal();
    setQuantity(1);
  };
  return (
    <Modal
      visible={isOpen}
      onRequestClose={()=>{ 
    closeModal();
    setNewAddons([]);
        setQuantity(1);}}
      animationType="slide"
      transparent={true}>
      <ScrollView style={styles.modalContainer}  contentContainerStyle={{display:"flex",flex:1, paddingBottom: 140,     justifyContent: 'center',
    alignItems: 'center', }}>
        <View style={styles.contentContainer}>
        <TouchableOpacity onPress={()=>{ 
    closeModal();
    setNewAddons([]);
        setQuantity(1);}}><Icon name='close' size={20} /></TouchableOpacity>

          <Text style={styles.title}>Add to Cart</Text>
          {selectedItem && (
            <View style={styles.itemContainer}>
              <Image
                source={{uri: selectedItem?.item.imageUrl}}
                style={styles.itemImage}
              />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{selectedItem?.item.name}</Text>
                <Text style={styles.itemPrice}>
                  Rs. {selectedItem?.item.price * quantity}
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addButton} onPress={() => updateQty('remove')}>
                <Icon name='minus' />
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => updateQty('add')}>
                <Icon name='plus' />
                </TouchableOpacity>
              </View>
            </View>
          )}
          <View>
            <Text style={styles.addOnTitle}>Add ons</Text>
            {addons.map(addon => (
              <View key={addon._id} style={styles.addOnContainer}>
                <Image
                  source={{uri: addon.imageUrl}}
                  style={styles.addOnImage}
                />
                <View style={styles.addOnDetails}>
                  <Text style={styles.addOnName}>{addon.name}</Text>
                  <Text style={styles.addOnPrice}>Rs. {addon.price}</Text>
                </View>
                <View style={styles.addOnButtonContainer}>
                  {!newAddons.some(
                    addedAddon => addedAddon.addon._id === addon._id,
                  ) && (
                    <TouchableOpacity
                      onPress={() => updateAddon('add', addon._id)}
                      style={styles.addButton}>
                      <Text>Add</Text>
                    </TouchableOpacity>
                  )}
                  {newAddons.some(
                    addedAddon => addedAddon.addon._id === addon._id,
                  ) && (
                    <>
                      <TouchableOpacity
                        onPress={() => updateAddon('remove', addon._id)}
                        style={styles.addButton}>
                                  <Icon name='minus' />

                      </TouchableOpacity>
                      <Text style={styles.addOnQuantity}>
                        {
                          newAddons.find(
                            addedAddon => addedAddon.addon._id === addon._id,
                          )?.quantity
                        }
                      </Text>
                      <TouchableOpacity
                        onPress={() => updateAddon('add', addon._id)}
                        style={styles.addButton}>
                                  <Icon name='plus' />
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              </View>
            ))}
          </View>
          <Button
          title="Add to Cart"
          onPress={updateCartQty}
        />
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    display:"flex",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20,
    height: "100%",
    width: "100%"
  },
  contentContainer: {
    backgroundColor: '#121111',
    padding: 20,
    width: "100%",
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  itemPrice: {
    fontSize: 14,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    fontSize: 24,
  },
  quantity: {
    fontSize: 16,
    color: '#fff',
    marginHorizontal: 10,
  },
  addOnTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  addOnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  addOnImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  addOnDetails: {
    flex: 1,
  },
  addOnName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  addOnPrice: {
    fontSize: 12,
    color: '#fff',
  },
  addOnButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  addButton: {
    backgroundColor: '#800000',
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  addOnIcon: {
    color: '#fff',
    fontSize: 20,
  },
  addOnQuantity: {
    fontSize: 14,
    color: '#fff',
    marginHorizontal: 5,
  },
  addToCartButton: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  addToCartButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default AddToCartModal;
