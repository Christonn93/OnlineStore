import { AddToCart } from '@/components/button/AddToCart';
import { useGetProductData } from '@/hooks/query/useGetProductData';
import { Box, Container, Typography } from '@mui/material';

export const Product = () => {
  const { data, isLoading, isError } = useGetProductData();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (!data) return <div>No data</div>;

  return (
    <Container sx={{ marginTop: 10 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          mt: 2,
        }}
      >
        <Typography variant="h4">{data.title}</Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
          }}
        >
          <Box>
            <img src={data.imageUrl} alt={data.title} style={{ width: '100%', height: '350px', borderRadius: '8px' }} />
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box
              sx={{
                maxWidth: '350px',
              }}
            >
              <Typography variant="body1">{data.description}</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="h5" sx={{ alignSelf: 'flex-end' }}>
                ${data.price}
              </Typography>
              <Box sx={{ alignSelf: 'flex-end' }}>
                <AddToCart product={data} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
