import { IMenu, IMenuItem } from '../../types';
import api from '../axios';



export const getMenuItems = async (token: string,) => {
  try {
    const response = await api.get('/menu', { headers: { Authorization: `Bearer ${token}` } });
    return response.data ;
  } catch (error) {
    console.error('Error making GET request:', error);
    throw error;
  }
};
