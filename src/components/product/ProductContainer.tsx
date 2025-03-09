import { Box, Container } from '@mui/material';
import { ProductCard } from '../card/ProductCard';
import { useGetProducts } from '@/hooks/query/useGetProducts';

export const ProductContainer = () => {
  const { data: product = [] } = useGetProducts();
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
        {product.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Container>
  );
};
