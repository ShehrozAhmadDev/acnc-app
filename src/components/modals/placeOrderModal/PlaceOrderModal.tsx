import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import {useAppSelector} from '../../../redux/store';
import {IAddOnItem, ICartItem, IOrders} from '../../../types';
import {createOrder} from '../../../services/orders/createOrder';
import {Input} from '../../ui/input';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { setCart } from '../../../redux/features/cart-slice';

interface PlaceOrderModalProps {
  loading?: boolean;
  isOpen: boolean;
  closeModal: () => void;
}

const initialOrderData: IOrders = {
  phone: '',
  address: '',
  city: '',
  item: [],
  price: 0
};

const PlaceOrderModal: React.FC<PlaceOrderModalProps> = ({
  loading,
  isOpen,
  closeModal,
}) => {
  const {user} = useAppSelector(state => state.userReducer.value);
  const {items} = useAppSelector(state => state.cartReducer.value);
  const [orderData, setOrderData] = useState<IOrders>(initialOrderData);
  const dispatch = useDispatch();
  const handleFieldChange = (name: string, value: string) => {
    setOrderData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const calculateTotalPrice = (cartItems: ICartItem[]) => {
    return cartItems.reduce((accumulator, item) => {
      return accumulator + item.item.price * item.quantity;
    }, 0);
  };

  const handleCreateNewOrder = async () => {
    try {
      if (user?.token && orderData.phone && orderData.address && orderData.city ) {
        const data = await createOrder(user?.token, orderData);
        if (data.status === 200) {
          closeModal();
          dispatch(setCart([]));
          Alert.alert('Success', 'Order created successfully');
        }
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to create order. Please try again.');
    }
  };

  useEffect(() => {
    setOrderData(prevData => ({
      ...prevData,
      price: calculateTotalPrice(items),
      items: items.map(item => ({
        menuItemId: item.item._id,
        quantity: item.quantity,
        addOns: item.addOns.map((addon: any) => ({
          addOnId: addon.addOnId._id,
          quantity: addon.quantity,
        })),
      })),
    }));
  }, [items]);

  return (
    <Modal
      visible={isOpen}
      onRequestClose={closeModal}
      style={styles.modalContainer}>
      <ScrollView style={styles.contentContainer} contentContainerStyle={{paddingBottom: 130}}>
        {loading ? (
          <Text style={styles.loadingText}>Loading....</Text>
        ) : (
          <View style={styles.innerContent}>
            <Text style={styles.modalTitle}>Create New Order</Text>
            <Input
              placeholder="Phone No."
              value={orderData.phone}
              onChange={(value: string) => handleFieldChange('phone', value)}
              multiline={false}
            />
            <Input
              placeholder="Address"
              value={orderData.address}
              onChange={(value: string) => handleFieldChange('address', value)}
              multiline={true}
            />

            <Input
              placeholder="City"
              value={orderData.city}
              onChange={(value:string) => handleFieldChange('city', value)}
              multiline={true}
            />

            <View style={styles.cartContainer}>
              {items.length > 0 ? (
                items.map((cartItem, index) => (
                  <View key={index} style={styles.cartItemContainer}>
                    <Image
                      source={{uri: cartItem.item.imageUrl}}
                      style={styles.cartItemImage}
                    />
                    <View style={styles.cartItemDetails}>
                      <Text style={styles.cartItemName}>
                        {cartItem.item.name}
                      </Text>
                      <Text style={styles.cartItemDescription}>
                        {cartItem.item.description}
                      </Text>
                      <Text style={styles.cartItemPrice}>
                        Quantity: {cartItem.quantity} - Total: Rs.{' '}
                        {cartItem.item.price * cartItem.quantity}
                      </Text>
                    </View>
                  </View>
                ))
              ) : (
                <Text>Your cart is empty.</Text>
              )}
              <Text style={styles.totalPrice}>
                Total Price: Rs {calculateTotalPrice(items)}
              </Text>
            </View>
            <TouchableOpacity
              onPress={handleCreateNewOrder}
              style={styles.placeOrderButton}>
              <Text style={styles.placeOrderButtonText}>Place Order</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </Modal>
  );
};

export const styles = StyleSheet.create({
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
        height: "100%",
      },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  innerContent: {
    flex: 1,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addressInput: {
    height: 100,
  },
  cartContainer: {
    marginTop: 20,
  },
  cartItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cartItemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    fontWeight: 'bold',
  },
  cartItemDescription: {
    color: '#666',
    marginBottom: 5,
  },
  cartItemPrice: {
    color: '#666',
  },
  totalPrice: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  placeOrderButton: {
    backgroundColor: '#5e0701',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  placeOrderButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PlaceOrderModal;
