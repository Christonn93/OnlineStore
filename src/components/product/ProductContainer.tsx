import { Box, Container } from '@mui/material';
import { ProductCard } from '../card/ProductCard';
import { useGetProducts } from '@/hooks/query/useGetProducts';
import { Product } from '@/services/types';

export const ProductContainer = () => {
  const { data: products } = useGetProducts();

  const prod = products as Product[] | undefined;

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'center',
        }}
      >
        {prod?.map((product: Product) => <ProductCard key={product.id} product={product} />)}
      </Box>
    </Container>
  );
};
