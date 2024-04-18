import { IOrders } from '../../types';
import api from '../axios';



export const createOrder = async (token: string,body: IOrders) => {
  try {
    const response = await api.post('/order',body, { headers: { Authorization: `Bearer ${token}` } });
    console.log(response.data)
    return response.data ;
  } catch (error) {
    console.error('Error making GET request:', error);
    throw error;
  }
};
