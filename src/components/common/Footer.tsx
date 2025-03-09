import { name } from '@/businessInfo.json';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#343a40', padding: '10px', color: '#fff', textAlign: 'center' }}>
      <p>
        &copy; {year} {name}
      </p>
    </footer>
  );
};
