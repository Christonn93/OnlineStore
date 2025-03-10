import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/BaseLayout';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import './assets/styles/globalStyle.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createCustomTheme } from './theme/theme';
import { useState } from 'react';
import { Product } from './pages/Product';
import { CartPage } from './pages/CartPage';

export const App = () => {
  const [themeMode] = useState<'light' | 'dark'>('dark');

  return (
    <ThemeProvider theme={createCustomTheme(themeMode)}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
