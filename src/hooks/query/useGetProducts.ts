import { fetchProducts } from '@/services/fetchProducts';
import { Products } from '@/services/types';
import { useQuery } from '@tanstack/react-query';

export const useGetProducts = () => {
  return useQuery<Products[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000,
  });
};
