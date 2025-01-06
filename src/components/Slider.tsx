"use client";

import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Interface for image data

  
  // Image data array
  const images = [
    {
      src: '/images/image2.png',
    },
    {
      src: '/images/image2.png',
    },
    {
      src: '/images/image3.png',
    },
  ];

function Slider() {
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
 
   // useEffect hook to handle automatic slide transition
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
     <div className="relative w-full">
       <div
         className="relative h-[358px] w-full"
         onMouseOver={handleMouseOver}
         onMouseLeave={handleMouseLeave}
       >
         <Image
           src={images[currentIndex].src}
           alt={`Slider Image ${currentIndex + 1}`}
           layout="fill"
           objectFit="cover"
           className="transition-all duration-500 ease-in-out cursor-pointer"
         />
       </div>
       <div className='absolute top-0 left-0 right-0 bottom-0'>
            <button
                className="absolute left-[80px] top-1/2 transform  rounded-full hover:bg-[#fff] mx-1 -mt-[10px] -translate-y-1/2 text-black p-2 group"
                onClick={prevSlide}
            >
                <ChevronLeft className="text-black " />
            </button>
            <button
                className="absolute right-[80px] top-1/2 transform  rounded-full hover:bg-[#fff] mx-1 -mt-[10px] -translate-y-1/2  text-black p-2 group"
                onClick={nextSlide}
            >
                <ChevronRight className="text-black " />
            </button>
            <div className=" absolute bottom-1 left-0 right-0 mb-[15px] ">
                <div className='flex justify-center items-center' >
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
            </div>
       </div>
       
     </div>
   );
}

export default Slider


