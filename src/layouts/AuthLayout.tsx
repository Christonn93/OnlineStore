import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Authentication</h2>
      <Outlet />
    </div>
  );
};
