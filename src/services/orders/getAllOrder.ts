import api from '../axios';

export const getAllOrdersUsers = async (id: string,token: string) => {
  try {
    const response = await api.get(`/order/user/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data ;
  } catch (error) {
    console.error('Error making GET request:', error);
    throw error;
  }
};
