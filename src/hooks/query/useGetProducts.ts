import { fetchProducts } from '@/services/fetchProducts';
import { useQuery } from '@tanstack/react-query';

export const useGetProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000,
  });
};
