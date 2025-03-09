import { Route, Routes } from 'react-router-dom';
import { About, Contact, Home, NotFound } from '../pages';
import { MainLayout } from '../layouts';

export const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export const PublicRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      {publicRoutes.map(route => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
    </Route>
  </Routes>
);
