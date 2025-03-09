import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const useHeading = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const displayId = id;

  const getHeading = (pathname: string, displayId?: string) => {
    switch (pathname) {
      case '/':
        return 'Home';
      case '/about':
        return 'About';
      case '/contact':
        return 'Contact';
      case `/user/${displayId ?? ''}`:
        return `User ${displayId ?? ''}`;
      default:
        return 'Not Found';
    }
  };

  const heading = getHeading(location.pathname, displayId);

  useEffect(() => {
    document.title = heading;
  }, [heading]);

  return heading;
};
