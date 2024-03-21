import api from '../axios';


export const handleUserLogin = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error making POST request:', error);
    throw error;
  }
};
