import { axiosInstance } from './axiosInstance';
import { Products } from './types';

export const fetchProducts = async (): Promise<Products[]> => {
  const { data } = await axiosInstance.get('');
  return data;
};
