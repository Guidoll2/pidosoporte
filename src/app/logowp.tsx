'use client'
import { useEffect, useState } from 'react';

const LogoWp = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      setShowArrow(scrollPosition > windowHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   <a href='https://wa.me/+5491130265216' target='_blank' > 
 
   
   <img
      src="wpgray200.png"
      width={1000}
      height={1000}
      className={`fixed bottom-10 left-10 w-12 z-[100] ${showArrow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 transition-opacity ease-in duration-300'}`}
      alt="Logowp"
    /></a>
  );
};

export default LogoWp;