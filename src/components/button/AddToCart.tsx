import { useStore } from '@/hooks/store/useStore';
import { Product } from '@/hooks/store/useStore.types';
import { Badge, Box, Button } from '@mui/material';
import { toast } from 'react-toastify';

export const AddToCart = ({ product }: { product: Product }) => {
  const { addToCart, cart } = useStore();

  return (
    <Box>
      <Badge badgeContent={cart.length} color="success">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {
            toast.success('Product added to cart');
            addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              quantity: 1,
              description: product.description,
              imageUrl: product.imageUrl,
            });
          }}
        >
          Add to cart
        </Button>
      </Badge>
    </Box>
  );
};
