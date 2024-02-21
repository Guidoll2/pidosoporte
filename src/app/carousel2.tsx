'use client'

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoInfiniteOutline } from "react-icons/io5";

interface Carousel2Props {
  images: string[];
}

export default function Carousel2({ images }: Carousel2Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 40000,
    slidesToShow: 5,
    slidesToScroll: 15,
    centerMode: false,  // Permite que haya un centro activo   
    cssEase: "linear",  // Utiliza una transición linear para el efecto de desplazamiento constante
    afterChange: (index: number) => setCurrentSlide(index),
    autoplay: true,
    autoplaySpeed: 1000,
    
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className=''> 
            {image === '/' ? null : (
              <Image
                src={image}
                objectFit="contain"
                className="p-20"
                alt="logo"
                width={1000}
                height={1000}
              />
            )}
          </div>
        ))}
      </Slider>
  
   
    </div>
  );
}