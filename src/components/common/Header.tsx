import { Link } from 'react-router-dom';
import { websiteDetails } from '@/businessInfo.json';

export const Header = () => {
  return (
    <header style={{ background: '#007bff', padding: '10px', color: '#fff' }}>
      <h1>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
          {websiteDetails.name}
        </Link>
      </h1>
    </header>
  );
};
