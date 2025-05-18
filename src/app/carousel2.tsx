import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Carousel2Props {
  images: string[];
}

const ArrowButton = ({ onClick, direction }: { onClick?: () => void; direction: 'prev' | 'next'; }) => (
  <motion.button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500`}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    style={{ [direction === 'prev' ? 'left' : 'right']: '10px' }}
  >
    {direction === 'prev' ? <IoChevronBackOutline size={24} color="#fff" /> : <IoChevronForwardOutline size={24} color="#fff" />}
  </motion.button>
);

export default function Carousel2({ images }: Carousel2Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 40000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    prevArrow: <ArrowButton direction="prev" />,
    nextArrow: <ArrowButton direction="next" />,
    appendDots: (dots: React.ReactNode) => (
      <ul className="flex justify-center mt-4">{dots}</ul>
    ),
    customPaging: (i: number) => (
      <button className="w-3 h-3 rounded-full bg-gray-700">
        <motion.div
          className="w-full h-full rounded-full"
          animate={ i === currentSlide ? { scale: [1, 1.4, 1] } : {} }
          transition={{ duration: 1, repeat: Infinity }}
        />
      </button>
    ),
  };

  return (
    <div className="relative bg-gray-900 p-6 rounded-3xl shadow-xl overflow-hidden">
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx} className="flex justify-center items-center p-4">
            <motion.div
              className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center"
              whileHover={{ scale: 1.2 }}
            >
              <Image
                src={src}
                alt={`partner-${idx}`}
                width={120}
                height={120}
                className="object-contain filter brightness-90 hover:brightness-100"
              />
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
