import React, { useRef, useState } from 'react'
import Product from './Product';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function ProductSlider() {

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Create a ref for the scrollable container, explicitly typing it as a div
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  let target = 0;

  // Function to scroll the container to the center
  const scrollT = ( right:boolean) => {
    const container = scrollContainerRef.current;

    // Ensure the container exists before trying to access its properties
    if (container) {
      const contentWidth = container.scrollWidth;
      const containerWidth = container.offsetWidth;
      const targetPosition = 200;
      target = right===true ? target - targetPosition : target + targetPosition  ;
      

      console.log([contentWidth, containerWidth, targetPosition, target]);

      // Scroll the container to the target position
      container.scrollTo({
        left: target,
        behavior: 'smooth', // smooth scrolling
      });
    }
  };

  // Function to detect if we are at the beginning or end
  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;

    if (container) {
      const isAtStart = container.scrollLeft === 0;
      const isAtEnd = container.scrollLeft + container.offsetWidth === container.scrollWidth;

      // Update the state based on the scroll position
      setIsAtStart(isAtStart);
      setIsAtEnd(isAtEnd);
    }
  };

  // Detect scroll position whenever the user scrolls
  const handleScroll = () => {
    checkScrollPosition();
  };
  
  return (
    
    <div className='relative'>
        
          
          {
            (!isAtEnd ) && (
              <div className='absolute cursor-pointer z-50 -left-[28px] top-1/2 transform -translate-y-1/2 h-14 w-14 bg-slate-300 rounded-full flex items-center justify-center'>
                <button
                  className="rounded-full hover:bg-[#fff] text-black group"
                  onClick={()=>scrollT(false)}
                >
                  <ChevronLeft size={30} className="text-black" />
                </button>
              </div>
            )
          }
          
          {
            !isAtStart && (
              <div className='absolute cursor-pointer z-50 -right-[28px] top-1/2 transform -translate-y-1/2 h-14 w-14 bg-slate-300 rounded-full flex items-center justify-center'>
                <button className="rounded-full hover:bg-[#fff] text-black group" onClick={()=>scrollT(true)} >
                  <ChevronRight size={30} className="text-black" />
                </button>
              </div>
            )
          }
          
        
        
        <div className="overflow-x-auto flex hide-scrollbars gap-5 " ref={scrollContainerRef} onScroll={handleScroll}>
          <Product /> <Product /> <Product /> <Product />
          <Product /> <Product /> <Product /> <Product />
          <Product /> <Product /> <Product /> <Product />
        </div>
    </div>
  
  )
}

export default ProductSlider


            // <button
            //     className="absolute right-[80px] top-1/2 transform  rounded-full hover:bg-[#fff] mx-1 -mt-[10px] -translate-y-1/2  text-black p-2 group"
            //     onClick={nextSlide}
            // >
            //     <ChevronRight className="text-black " />
            // </button>