import { IMenu, IMenuItem } from '../../types';
import api from '../axios';



export const getAddons= async (token: string,) => {
  try {
    const response = await api.get('/addon', { headers: { Authorization: `Bearer ${token}` } });
    return response.data ;
  } catch (error) {
    console.error('Error making GET request:', error);
    throw error;
  }
};
