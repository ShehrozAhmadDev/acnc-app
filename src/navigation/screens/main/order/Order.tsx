import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getAllOrdersUsers} from '../../../../services/orders/getAllOrder';
import {useAppSelector} from '../../../../redux/store';
import {IOrders} from '../../../../types';

const Order = () => {
  const {user} = useAppSelector(state => state.userReducer.value);
  const [orders, setOrders] = useState([]);
  const getAllOrder = async () => {
    try {
      if (user?._id && user.token) {
        const data = await getAllOrdersUsers(user?._id, user?.token);
        if (data.status === 200) {
          setOrders(data.order);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllOrder();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>Orders History</Text>

      <View style={styles.orderContainer}>
        {orders.map((order: IOrders, index: number) => (
          <View style={styles.itemContainer} key={index}>
            <View>
              <Text>Order - {order._id}</Text>
              <Text>
                {order.address}, {order.city}
              </Text>
            </View>
            <View>
              <Text>{order.status}</Text>
              <Text>{order.price} Rs</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 10,
    height: '100%',
  },
  orderContainer:{
    display:"flex",
    gap: 10
  },
  headertext: {
    fontSize: 28,
    fontWeight: '600',
    marginVertical: 10,
    textAlign: 'center',
  },
  itemContainer: {
    width: '100%',
    borderRadius: 30,
    backgroundColor: '#121111',
    elevation: 20,
    padding: 18,
    display: 'flex',
    flexDirection:"row",
    justifyContent: 'space-between',
  },
});
