"use client";

import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from "react";

  // Image data array
  const images = [
    {
      src: '/images/p1.png',
    },
    {
      src: '/images/p2.png',
    },
    {
      src: '/images/p3.png',
    },
    
  ];

function ProductDetailSlide() {
    // State to keep track of the current image index
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    // State to determine if the image is being hovered over
    const [isHovered, setIsHovered] = useState<boolean>(false);
    
    // Function to show the previous slide
    const prevSlide = (): void => {
        setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    // Function to show the next slide
    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    useEffect(() => {
        // Start interval for automatic slide change if not hovered
        if (!isHovered) {
          const interval = setInterval(() => {
            nextSlide();
          }, 3000);
    
          // Cleanup the interval on component unmount
          return () => {
            clearInterval(interval);
          };
        }
    }, [isHovered]);
    // Handle mouse over event
    const handleMouseOver = (): void => {
        setIsHovered(true);
    };

    // Handle mouse leave event
    const handleMouseLeave = (): void => {
        setIsHovered(false);
    };

  return (
    <div  className='flex flex-col items-center flex-1 ' >
        <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className='relative md:w-[283px] lg:w-[378px] xl:w-[472px]'>
            <Image
              src={images[currentIndex].src}
              alt={`Slider Image ${currentIndex + 1}`}
              layout="intrinsic"
              width={472}
              height={405}
              objectFit="contain"
              className="transition-all duration-500 ease-in-out cursor-pointer"
            />
        </div>
        <div className='flex justify-center items-center my-[34px]' >
            {images.map((_, index) => (
                <div
                    key={index}
                    className={` flex items-center justify-center mx-[8px] rounded-full ${
                    index === currentIndex
                        ? "h-[16px] w-[16px] border border-black "
                        : "h-[10px] w-[10px] bg-black"
                    } transition-all duration-500 ease-in-out`}
                >
                    { index === currentIndex && <div className='h-[8.5px] w-[8.5px] bg-black rounded-full' ></div>}
                </div>
            ))}
        </div>
        <div className='flex justify-center items-center w-full' >
            {images.map((_, index) => (
                <div
                onClick={()=>setCurrentIndex(index)}
                    key={index}
                    className={` cursor-pointer w-[95px] h-[70px] lg:w-[126px] lg:h-[94px] xl:w-[157.54px] relative xl:h-[116.4px] flex items-center justify-center mx-[8px] transition-all duration-500 ease-in-out  `}
                >
                    <Image alt={`Slider Image ${index + 1}`} layout="fill" objectFit="contain"  src={images[index].src} />
                    {/* { index === currentIndex && <div className='h-[8.5px] w-[8.5px] bg-black rounded-full' ></div>} */}
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductDetailSlide
