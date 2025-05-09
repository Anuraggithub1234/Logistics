import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const generateTitle = (path) => {
      if (path === '/' || path === '') return 'Ghost Trucking';
      const cleaned = path.replace('/', '').replace(/-/g, ' ');
      const capitalized = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
      return `${capitalized} / Ghost Trucking`;
    };

    document.title = generateTitle(path);
  }, [location]);

  return null;
};

export default RouteTitleUpdater;
