import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { ICartItem } from '../../../types';
import { useAppSelector } from '../../../redux/store';
import { setCart } from '../../../redux/features/cart-slice';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../../theme';


let items: ICartItem[] = [];

export interface ICartItemProps {
  item: ICartItem;
  setFlag: (value: number) => void;
  flag: number;
}

const CartItemComp: React.FC<ICartItemProps> = ({ item, setFlag, flag }) => {
  const [qty, setQty] = useState<number>(item.quantity || 0);
  const dispatch = useDispatch();
  const cartItems = useAppSelector((state) => state.cartReducer.value.items);

  const cartDispatch = (items: ICartItem[]) => {
    dispatch(setCart(items));
  };

  const updateQty = (action: string, id?: string) => {
    if (action === "add") {
      setQty(qty + 1);

      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem.item._id === id) {
          return { ...cartItem, quantity: (cartItem.quantity || 0) + 1 };
        }
        return cartItem;
      });

      if (!updatedItems.some((item) => item.item._id === id)) {
        // If the item is not in the cart, add it
        updatedItems.push({ item: item.item, quantity: 1, addOns: [] });
      }

      setFlag(flag + 1);
      cartDispatch(updatedItems);
    } else {
      if (qty === 1) {
        const updatedItems = cartItems
          .map((cartItem) => {
            if (cartItem.item._id === id) {
              if (cartItem.quantity && cartItem.quantity > 1) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
              }
            }
            return cartItem;
          })
          .filter((cartItem) => cartItem.item._id !== id);

        setFlag(flag + 1);
        cartDispatch(updatedItems);
      } else {
        setQty(qty - 1);
        const updatedItems = cartItems.map((cartItem) => {
          if (cartItem.item._id === id) {
            if (cartItem.quantity) {
              return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
          }
          return cartItem;
        });

        setFlag(flag + 1);
        cartDispatch(updatedItems);
      }
    }
  };
  useEffect(() => {
    items = cartItems;
    const quat = cartItems.find((cartItem) => {
      if (cartItem.item._id === item.item._id) {
        return cartItem.quantity;
      }
    });

    setQty(quat?.quantity || 1);
  }, [qty, items]);

  return (
    <View>
      <View style={styles.cartItemContainer}>
        <Image source={{ uri: item.item.imageUrl }} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item?.item.name}</Text>
          <Text style={styles.itemPrice}>Rs. {item?.item.price * item.quantity}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity  style={styles.plusButton} onPress={() => updateQty('remove', item?.item._id)}>
            <Icon name='plus' />
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity  style={styles.plusButton} onPress={() => updateQty('add', item?.item._id)}>
          <Icon name='minus' />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {item.addOns.map((addon) => (
          <View key={addon.addOnId._id} style={styles.addOnContainer}>
            <Image source={{ uri: addon.addOnId.imageUrl }} style={styles.addOnImage} />
            <View style={styles.addOnDetails}>
              <Text style={styles.addOnName}>{addon?.addOnId.name}</Text>
              <Text style={styles.addOnPrice}>Rs. {addon?.addOnId.price * addon.quantity}</Text>
            </View>
            <View style={styles.addOnButtonContainer}>
              <Text style={styles.addOnQuantity}>{addon.quantity}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121111',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
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
    fontSize: 16,
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
  addOnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  addOnImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  addOnDetails: {
    flex: 1,
  },
  addOnName: {
    fontSize: 14,
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
  addOnQuantity: {
    fontSize: 14,
    color: '#fff',
    marginHorizontal: 5,
  },
  plusButton:{
    backgroundColor:"#800000", padding: 10, borderRadius: 12
  }
});

export default CartItemComp;
