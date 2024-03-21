import api from '../axios';

interface SignupResponse {
  status: number;
  email: string;
  token: string;
  message: string;
  user: object;
}

export const handleUserRegister = async (email: string, password: string): Promise<SignupResponse> => {
  try {
    const response = await api.post('/auth/register', { email, password });
    console.log(response.data)
    return response.data as SignupResponse;
  } catch (error) {
    console.error('Error making POST request:', error);
    throw error;
  }
};
