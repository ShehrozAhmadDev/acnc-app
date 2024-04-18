import axios, { AxiosInstance,  AxiosResponse } from 'axios';

// Create an Axios instance with a base URL
const api: AxiosInstance = axios.create({
  baseURL: 'https://food-delivery-be-q2zk.onrender.com/api', // Replace with your API base URL
  timeout: 5000, // Set a timeout for requests in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
});


// Add a response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error);
  }
);

export default api;
