import React from 'react'
import Image from "next/image";
import Link from 'next/link';


function Product() {
  return (
    <Link href="/product/1">
        <div className="relative w-[187px] h-[215px]  md:w-[226px] md:h-[301px]  lg:w-[291px] lg:h-[387px] xl:w-[323px] xl:h-[430px] border border-black rounded-[26px]">
            <div className=" w-full h-full p-1 flex flex-col justify-between" >
                <div className=" md:h-[187px] lg:h-[220px] flex items-center justify-center mb-4 relative md:mx-0 mx-auto " >
                    <div className=' w-[150px] h-[100px] sm:w-[200px] sm:h-[105px] md:h-[150px] lg:w-[250px] lg:h-[200px] relative ' >
                        <Image alt="produit" src={'/images/produit.png'}  layout='fill' objectFit='contain' />
                    </div>
                </div>
                <div className='flex flex-1 flex-col items-center justify-between' >
                    <div className='flex flex-col items-center justify-center flex-1' >
                        <div className='flex'>
                            <div className='flex'>
                                {
                                    [1,2,3,4,5].map((_,m)=>(
                                        <svg className="mr-[2px] w-2 sm:w-3 md:w-5" key={m+m} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.04894 1.42705C8.3483 0.505738 9.6517 0.50574 9.95106 1.42705L11.2451 5.40983C11.379 5.82185 11.763 6.10081 12.1962 6.10081H16.3839C17.3527 6.10081 17.7554 7.34043 16.9717 7.90983L13.5838 10.3713C13.2333 10.626 13.0866 11.0773 13.2205 11.4894L14.5146 15.4721C14.8139 16.3934 13.7595 17.1596 12.9757 16.5902L9.58778 14.1287C9.2373 13.874 8.7627 13.874 8.41221 14.1287L5.02426 16.5902C4.24054 17.1596 3.18607 16.3934 3.48542 15.4721L4.7795 11.4894C4.91338 11.0773 4.76672 10.626 4.41623 10.3713L1.02827 7.90983C0.244561 7.34043 0.647338 6.10081 1.61606 6.10081H5.8038C6.23703 6.10081 6.62099 5.82185 6.75486 5.40983L8.04894 1.42705Z" fill="#FFAB08"/>
                                        </svg>
                                    ))
                                }
                            </div>
                            <span className=' block ml-1 text-heading-xs md:text-para-md text-black ' >(150 Avis)</span>
                        </div>
                        <span className=' mt-2 text-heading-xs md:text-heading-sm lg:text-label-xl text-black font-medium ' >
                            Gazinière Nasco - 4 feux
                        </span>
                    </div>
                    <div className=' w-full flex items-center justify-between pl-4 pr-2'>
                        <span className='block text-para-lg lg:text-para-xl text-black ' >1 000 <span className=' text-para-sm lg:text-para-md text-[#616B77] ' >- 45 jours</span></span>
                        <div className=' flex items-center justify-center bg-[#FCCF2F] h-[38px] w-[38px] rounded-full ' >
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.29894 11.9735L4.38774 1.75391H17.253C18.1804 1.75391 18.8981 2.56636 18.7837 3.48665L17.6849 12.3272C17.5889 13.0995 16.9325 13.6794 16.1542 13.6794H4.83274C3.91619 13.6794 3.20183 12.8849 3.29894 11.9735Z" stroke="#1E242F" strokeWidth="0.925489"/>
                                <path d="M1 0.5C1.8067 0.583688 3.61371 0.951913 4.38814 1.75531" stroke="#1E242F" strokeWidth="0.925489" strokeLinecap="round"/>
                                <path d="M18.3672 6.15234L6.93221 6.15234" stroke="#1E242F" strokeWidth="0.925489"/>
                                <path d="M8.3134 16.8261C8.3134 17.5164 7.57502 18.1914 6.50431 18.1914C5.43359 18.1914 4.69522 17.5164 4.69522 16.8261C4.69522 16.1358 5.43359 15.4608 6.50431 15.4608C7.57502 15.4608 8.3134 16.1358 8.3134 16.8261Z" stroke="#1E242F" strokeWidth="0.616993"/>
                                <path d="M15.5107 16.8261C15.5107 17.5164 14.7723 18.1914 13.7016 18.1914C12.6309 18.1914 11.8925 17.5164 11.8925 16.8261C11.8925 16.1358 12.6309 15.4608 13.7016 15.4608C14.7723 15.4608 15.5107 16.1358 15.5107 16.8261Z" stroke="#1E242F" strokeWidth="0.616993"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" absolute top-[8px] right-[8px] " > 
                <div className="w-[36] h-[36] rounded-full flex items-center justify-center bg-[#F6F6F7]">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.64127 4.49589C3.44804 -1.0421 8.19563 2.08735 9.24426 3.77358C13.0042 -1.18739 17.3917 2.72314 17.553 5.25327C18.0564 13.1446 11.6867 16.0427 9.63612 17.6477C7.1745 15.8134 -0.425649 10.8313 1.64127 4.49589Z" stroke="black"/>
                    </svg>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Product
