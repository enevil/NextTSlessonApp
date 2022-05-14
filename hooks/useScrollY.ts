import { useEffect, useState } from 'react';
import { throttleDispatch } from '../helpers/helpers';

export const useScrollY = () => {
  const isBrowser = typeof window !== undefined;

  const [scrollY, setScrollY] = useState(0);
  const throttleScroll = throttleDispatch(setScrollY, 500);

  const handleScroll = () => {
    const currentScrollY = isBrowser
      ? window.scrollY +
        (document.body.offsetHeight / (document.body.scrollHeight - document.body.offsetHeight)) * window.scrollY
      : 0;

    throttleScroll(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY;
};
