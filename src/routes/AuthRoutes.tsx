import { About, Contact, Home, NotFound } from '../pages';
import { Route, Routes } from 'react-router-dom';
import { AuthLayout } from '../layouts';

export const authRoutes = [
  {
    path: '/auth/home',
    component: Home,
  },
  {
    path: '/auth/about',
    component: About,
  },
  {
    path: '/auth/contact',
    component: Contact,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export const AuthRoutes = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      {authRoutes.map(route => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
    </Route>
  </Routes>
);
