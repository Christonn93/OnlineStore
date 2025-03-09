import { BrowserRouter } from 'react-router-dom';
import { PublicRoutes } from '../routes/PublicRoutes';
import { AuthRoutes } from '../routes/AuthRoutes';

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <PublicRoutes />
      <AuthRoutes />
    </BrowserRouter>
  );
};
