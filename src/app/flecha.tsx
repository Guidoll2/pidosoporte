'use client'
import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const IconoFlecha = () => {
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
    <a href="#navbar">
      <IoIosArrowUp
        size={56}
        className={`fixed bottom-10 right-4 w-14 h-14 z-[100] bg-sky-400 rounded-full p-2 shadow-lg cursor-pointer transition-all ${
          showArrow
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8 transition-opacity ease-in duration-300'
        }`}
        color="#fff"
        aria-label="Ir arriba"
      />
    </a>
  );
};

export default IconoFlecha;