import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollReset: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollReset = () => {
      window.scrollTo(0, 0);
    };

    scrollReset();

    return () => {
      window.removeEventListener('scroll', scrollReset);
    };
  }, [location]);

  return null;
};

export default ScrollReset;
