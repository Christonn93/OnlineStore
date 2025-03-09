/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useStore } from '../hooks/store/useStore';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const CartPage = () => {
  const { cart, totalItemsInCart, getTotalAmount, clearCart } = useStore();
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: 3, textAlign: 'center' }}>
      <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)}>
        Back
      </Button>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Shopping Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="h6">Your cart is empty.</Typography>
      ) : (
        <>
          <List>
            {cart.map(item => (
              <ListItem key={item.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <ListItemText primary={item.title} secondary={`$${item.price} x ${item.quantity} = $${item.price * item.quantity}`} />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="h6">Total Items: {totalItemsInCart}</Typography>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Total: ${getTotalAmount()}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCartCheckoutIcon />}
            onClick={() => {
              alert('Proceeding to checkout...');
              clearCart();
              navigate('/');
            }}
          >
            Checkout
          </Button>
        </>
      )}
    </Box>
  );
};
