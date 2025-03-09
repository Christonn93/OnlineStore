import axios from 'axios';
import { baseUrl } from './constants';

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example API functions using the instance
export const api = {
  getProducts: () => axiosInstance.get('/products'),
  getCategories: () => axiosInstance.get('/categories'),
  getProduct: (id: string) => axiosInstance.get(`/products/${id}`),
};
