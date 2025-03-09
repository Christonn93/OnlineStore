import { Route, Routes } from 'react-router-dom';
import { Product } from '../pages/Product';
import { CartPage } from '../pages/CartPage';

export const AuthRoutes = () => (
  <Routes>
    <Route path="product/:id" element={<Product />} />
    <Route path="cart" element={<CartPage />} />
  </Routes>
);
