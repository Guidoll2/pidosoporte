'use client'

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Carousel2Props {
  images: string[];
}

export default function Carousel2({ images }: Carousel2Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    afterChange: (index: number) => setCurrentSlide(index),
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative p-10" >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex items-center justify-center h-full">
            <Image
              src={image}
              objectFit="contain"
              className="animate-fadeIn w-12 h-12 "
              alt="logo"
              width={1000}
              height={1000}
            />
          </div>
        ))}
      </Slider>
  
      <div className="relative flex justify-center p-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={
              index === currentSlide
                ? "h-2 w-2 bg-gray-700 rounded-full mx-2 mb-2 mt-5 cursor-pointer"
                : "h-2 w-2 bg-gray-300 rounded-full mx-2 mb-2 mt-5 cursor-pointer"
            }
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}