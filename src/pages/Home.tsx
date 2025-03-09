import { HomeContent } from '@/components/content/HomeContent';
import { ProductContainer } from '@/components/product/ProductContainer';
import { Box, Container } from '@mui/material';

export const Home = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            padding: '15px',
            gap: 10,
          }}
        >
          <HomeContent />
          <ProductContainer />
        </Box>
      </Container>
    </>
  );
};
