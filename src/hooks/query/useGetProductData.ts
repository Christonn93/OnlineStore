import { axiosInstance } from '@/services/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const useGetProductData = () => {
  const { id } = useParams<{ id: string }>();

  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      if (!id) return null;
      const response = await axiosInstance.get(`/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};
