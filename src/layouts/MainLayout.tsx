import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
