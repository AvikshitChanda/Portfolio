import { useState, useEffect, useRef } from 'react';

const useScroll = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { top } = scrollRef.current.getBoundingClientRect();
        setIsScrolling(top < window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isScrolling, scrollRef };
};

export default useScroll;
