import { Footer } from '@/components/layout/Footer';
import PageHeader from '@/components/layout/Header';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <PageHeader />
        <Box flex="1">
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
