const baseURL = 'https://food-delivery-be-q2zk.onrender.com/api';

export const handleUserLogin = async (email: string, password: string) => {
  try {
    const response = await fetch(baseURL + '/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      // If response is not successful, throw an error
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error making POST request:', error);
    throw error;
  }
};
