import { Route, Routes } from 'react-router-dom';
import { About, Home, NotFound } from './pages';
import { MainLayout } from './layouts';
import './assets/styles/globalStyle.css';

export const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
