import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../../../redux/store";
import { setCart, setShowCart } from "../../../../redux/features/cart-slice";
import CartItemComp from "../../../../components/base/cartItemComp/cartItemComp";

const Cart = () => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { cartShow, items } = useAppSelector(
    (state) => state.cartReducer.value
  );
  const { user } = useAppSelector((state) => state.userReducer.value);
  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);

  const showCart = () => {
    dispatch(setShowCart(!cartShow));
  };

  useEffect(() => {
    if (items && items.length > 0) {
      const totalPrice = items.reduce((accumulator, item) => {
        const itemPrice = (item.quantity || 0) * item.item.price;
        const addonsPrice = item.addOns.reduce(
          (addonAccumulator: number, addon: { quantity: any; addOnId: { price: number; }; }) =>
            addonAccumulator + (addon.quantity || 0) * addon.addOnId.price,
          0
        );
        return accumulator + itemPrice + addonsPrice;
      }, 0);
      setTot(totalPrice);
    } else {
      setTot(0);
    }
  }, [items, flag]);

  const clearCart = () => {
    dispatch(setCart([]));
  };

  return (
    <ScrollView style={styles.container}  contentContainerStyle={{ paddingBottom: 140 }}>
      <View style={styles.subContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Cart</Text>
        <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
          <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>
      </View>

      {items && items.length > 0 ? (
        <View style={styles.cartContent}>
          <View style={styles.cartItems}>
            {items.map((item, index) => (
              <CartItemComp key={index} flag={flag} setFlag={setFlag} item={item} />
            ))}
          </View>
          <View style={styles.cartTotal}>
            <View style={styles.totalRow}>
              <Text style={styles.totalText}>Sub Total</Text>
              <Text style={styles.totalAmount}>Rs. {tot}</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalText}>Delivery</Text>
              <Text style={styles.totalAmount}>Rs. 50</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.totalRow}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalAmount}>Rs. {tot + 50}</Text>
            </View>
            {user ? (
              <TouchableOpacity
                style={styles.checkoutButton}
                onPress={() => setIsOrderOpen(true)}
              >
                <Text style={styles.checkoutText}>Check Out</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.checkoutButton}
              >
                <Text style={styles.checkoutText}>Login to check out</Text>
              </TouchableOpacity>
            )}
          </View>
 
        </View>
      ) : (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyCartText}>Add some items to your cart</Text>
        </View>
      )}

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 10,
    height: "100%"
  },
  subContainer:{
    height: "85%"
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  backIcon: {
    color: '#fff',
    fontSize: 24,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clearText: {
    color: '#fff',
    marginRight: 5,
  },
  refreshIcon: {
    color: '#fff',
    fontSize: 20,
  },
  cartContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cartItems: {
    maxHeight: 650,
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 10,
    marginBottom: 10,
  },
  cartTotal: {
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 10,
    marginBottom: 10,
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartImage: {
    width: 300,
    height: 300,
  },
  emptyCartText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  totalText: {
    color: '#888',
    fontSize: 16,
  },
  totalAmount: {
    color: '#fff',
    fontSize: 16,
  },
  divider: {
    borderBottomColor: '#666',
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  checkoutButton: {
    backgroundColor: '#800000',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  checkoutText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  
});

export default Cart;
