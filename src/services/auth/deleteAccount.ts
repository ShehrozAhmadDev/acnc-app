import api from '../axios';

export const handledeleteAccount = async (id: string, token: string) => {
  try {
    const response = await api.delete(`profile/${id}`,  { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    console.error('Error making POST request:', error);
    throw error;
  }
};
