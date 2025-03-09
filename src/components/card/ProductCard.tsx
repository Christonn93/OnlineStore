import { Product } from '@/services/types';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <>
      <Card
        sx={{
          width: '250px',
        }}
      >
        <CardMedia component="img" height="140" image={product.imageUrl} alt={product.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick}>
            Vew more
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
