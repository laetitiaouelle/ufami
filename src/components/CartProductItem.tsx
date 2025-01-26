import Image from 'next/image'
import React from 'react'

function CartProductItem() {
  return (
    <div className='flex items-end justify-between ' >
      <div className='flex items-center w-full flex-wrap' >
        <div className='flex items-center flex-1 min-w-[278px] '>
            <Image src={"/images/product.png"} alt='productItem' width={100} height={137} layout='intrinsic' className='mr-4' />
            <div className='flex flex-col justify-between h-[94px]'>
                <div>
                    <span className='block text-para-md text-black underline font-medium ' >Iphone X</span>
                    <span className=' text-para-md text-[#616B77] ' >25 000 x1</span>
                </div>
                <span className=' text-para-md text-black font-bold ' >25 000 CFA</span>
            </div>
        </div>
        <div className=' sm:mr-[42.78px] sm:h-[94px] flex items-start sm:items-end justify-end w-full sm:w-auto' >
            <div className=' py-[4.64px] px-[6.97px] bg-[#F3F3F3] rounded-[29.04] flex items-center ' >
                <div className=' w-[31.36px] h-[31.36px] rounded-full border-[1.16px] border-[#122032] flex items-center justify-center  mr-[12.78px]' >
                    <svg width="16" height="3" viewBox="0 0 16 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.17969 1.14062H15.1181" stroke="#132133" strokeWidth="1.74231" strokeLinecap="round"/>
                    </svg>
                </div>
                <span className='text-para-lg text-[#000D21] ' >1</span>
                <div className=' w-[31.36px] h-[31.36px] rounded-full border-[1.16px] bg-[#122032] border-[#122032] flex items-center justify-center  ml-[12.78px]' >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.0957 8.14062H15.0342" stroke="white" strokeWidth="1.74231" strokeLinecap="round"/>
                        <path d="M8.06445 1.17188V15.1103" stroke="white" strokeWidth="1.74231" strokeLinecap="round"/>
                    </svg>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartProductItem
