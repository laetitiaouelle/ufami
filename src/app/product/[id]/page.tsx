"use client";

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductDetailSlide from '@/components/ProductDetailSlide'
import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import ProductSlider from '@/components/ProductSlider';


function ProductDetail() {
  const colors:String[] =["#D8CCCE","#822828","#222222","#505E73"]
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const PlusIcon = () => {
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.0957 8.14062H15.0342" stroke="#000000" strokeWidth="1.74231" strokeLinecap="round"/>
          <path d="M8.06445 1.17188V15.1103" stroke="#000000" strokeWidth="1.74231" strokeLinecap="round"/>
        </svg>
      );
    };
  return (
    <div>
     <Header/>
     <div className=' p-10 lg:px-20 py-12 bg-white ' >
        <div className='flex justify-between gap-8 lg:gap-16 xl:gap-44 flex-wrap md:flex-nowrap' >
          <div className='flex flex-col flex-1  ' >
            <span className=' text-label-lg text-black font-medium ' >Airfryer NINJA Foodi DualZone 7,6L AF300EU </span>
            <div className='flex mt-2' >
              <div className='flex' >
                {
                  [1,2,3,4,5].map((i,n)=>(
                    <svg key={n*n} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.04894 1.42705C8.3483 0.505738 9.6517 0.50574 9.95106 1.42705L11.2451 5.40983C11.379 5.82185 11.763 6.10081 12.1962 6.10081H16.3839C17.3527 6.10081 17.7554 7.34043 16.9717 7.90983L13.5838 10.3713C13.2333 10.626 13.0866 11.0773 13.2205 11.4894L14.5146 15.4721C14.8139 16.3934 13.7595 17.1596 12.9757 16.5902L9.58778 14.1287C9.2373 13.874 8.7627 13.874 8.41221 14.1287L5.02426 16.5902C4.24054 17.1596 3.18607 16.3934 3.48542 15.4721L4.7795 11.4894C4.91338 11.0773 4.76672 10.626 4.41623 10.3713L1.02827 7.90983C0.244561 7.34043 0.647338 6.10081 1.61606 6.10081H5.8038C6.23703 6.10081 6.62099 5.82185 6.75486 5.40983L8.04894 1.42705Z" fill="#000000"/>
                    </svg>
                  ))
                }
              </div>
              <span className=' text-para-sm text-black font-semibold mx-2 ' >4,7/6</span>
              <span className=' text-para-md text-black font-medium' >(322 Avis)</span>
            </div>
            <div className=' flex items-center justify-between pt-2 ' >
              <span className='text-heading-sm text-[#A6A6A6] font-bold' >Sport</span>
                <div className='py-[4.64px] px-[6.97px] bg-[#F3F3F3] rounded-[29.04] flex items-center'>
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
            <div className='mt-5' >
              <ProductDetailSlide/>
            </div>
          </div>
          <div  className=' flex flex-col flex-1 min-w-[323px] w-full  md:max-w-[550px]  '  >
            <div className='flex justify-end mb-4' >
              <div className=' w-[60px] h-[50px] rounded-[100%] bg-[#F3F3F3] flex items-center justify-center ' >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.39099 5.69833C4.34353 -3.35158 12.1018 1.76241 13.8154 4.51798C19.9598 -3.58901 27.1295 2.80139 27.3932 6.936C28.2158 19.8316 17.8068 24.5675 14.4558 27.1903C10.4331 24.1929 -1.98667 16.0513 1.39099 5.69833Z" fill="#E33538"/>
                </svg>
              </div>
            </div>
            <span className='text-heading-lg font-bold text-black ' >52 000 CFA</span>
            <div className='my-[26px]' >
                <div className='flex w-[144px] h-[44px] rounded-[29.49] shadow-md px-[10px] py-[14px] items-center justify-between ' >
                    {
                      colors.map((c,m)=>(
                        <div key={m} style={{backgroundColor:c.toString()}} className={`w-5 h-5 rounded-full `} ></div>
                      ))
                    }
                </div>
            </div>
            <div className=' bg-[#F6F6F6] w-full rounded-[22px] px-[15px] py-[7px] mb-4 ' >
              <div className='flex items-center justify-between ' >
                <span className=' text-para-sm text-[#193364] font-semibold ' >Paiement Echelonné</span>
                <span className=' text-para-sm text-[#193364] font-semibold ' >Total a payer</span>
              </div>
              <div className='flex items-center justify-between mt-2 ' >
                <span className=' text-para-lg text-[#193364] font-semibold ' >1 000 CFA <span className='text-para-sm text-[#193364] font-semibold' >/ jours</span></span>
                <span className=' text-label-md text-[#193364] font-semibold ' >52 000 CFA</span>
              </div>
              <div>
                <span className=' text-para-sm text-[#193364] font-semibold ' >5 - 52 jours</span>
              </div>
            </div>
            <div className=' bg-white w-full rounded-[22px] px-[15px] py-[7px] border border-[#F3F3F3] ' >
              <div className='flex items-center justify-start ' >
                <span className=' text-para-sm text-[#193364] font-semibold ' >Paiement cash</span>
              </div>
              <div className='flex items-center justify-start mt-2 ' >
                <span className=' text-para-lg text-[#193364] font-semibold ' >1 000 CFA </span>
              </div>
            </div>
            <div className=' w-full h-[50px]  md:h-[60px] lg:h-[70px] bg-[#FCCF2F] mt-[43px] flex items-center justify-center gap-6 rounded-full cursor-pointer' >
              <svg width="24" height="24" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.875 6.0046C8.68969 3.54333 10.3802 1.4989 12.3086 1.5C13.6349 1.50076 15.033 1.94199 16.5 6.0046M21.2088 10.4364L22.8144 18.5264C23.4281 21.6184 21.0623 24.4998 17.9101 24.4998H6.32256C3.09529 24.4998 0.713374 21.4879 1.45717 18.3475L3.37327 10.2574C3.90739 8.00227 5.92116 6.40974 8.23867 6.40974H16.3044C18.6906 6.40974 20.7442 8.09585 21.2088 10.4364Z" stroke="black" strokeWidth="1.73"/>
              </svg>
              <span className=' text-heading-xs  lg:text-heading-lg text-black font-bold ' >Ajouter au panier </span>
            </div>
          </div>
        </div>
      {/* accordeon */}
        <div className='mt-[48px] border-t' >
          <Accordion className='' >
            <AccordionItem  className='text-start text-heading-lg text-black my-[44px]  font-semibold' key="9" aria-label="Accordion 1" title="CARACTÉRISTIQUES DU PRODUITS" indicator={<PlusIcon />}>
              <div className='my-10 !text-para-md !font-normal !text-black'>
                {defaultContent}
              </div>
            </AccordionItem>
            <AccordionItem className='text-start text-heading-lg text-black my-[44px]  font-semibold' key="20" aria-label="Accordion 2" title="DESCRIPTION" indicator={<PlusIcon />}>
              <div className='my-10 !text-para-md !font-normal !text-black'>
                {defaultContent}
              </div>
            </AccordionItem>

            <AccordionItem  className=' my-[44px]' key="8" aria-label="Accordion 6" title={
              <div  className='flex items-center justify-start' >
                <span className='text-start text-heading-md text-black font-medium mr-12 ' >Avis</span>
                <div className='flex' >
                  <div className='flex' >
                    {
                      [1,2,3,4,5].map((i,n)=>(
                        <svg key={n*n} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.04894 1.42705C8.3483 0.505738 9.6517 0.50574 9.95106 1.42705L11.2451 5.40983C11.379 5.82185 11.763 6.10081 12.1962 6.10081H16.3839C17.3527 6.10081 17.7554 7.34043 16.9717 7.90983L13.5838 10.3713C13.2333 10.626 13.0866 11.0773 13.2205 11.4894L14.5146 15.4721C14.8139 16.3934 13.7595 17.1596 12.9757 16.5902L9.58778 14.1287C9.2373 13.874 8.7627 13.874 8.41221 14.1287L5.02426 16.5902C4.24054 17.1596 3.18607 16.3934 3.48542 15.4721L4.7795 11.4894C4.91338 11.0773 4.76672 10.626 4.41623 10.3713L1.02827 7.90983C0.244561 7.34043 0.647338 6.10081 1.61606 6.10081H5.8038C6.23703 6.10081 6.62099 5.82185 6.75486 5.40983L8.04894 1.42705Z" fill="#FCCF2F"/>
                        </svg>
                      ))
                    }
                  </div>
                  <span className=' text-para-sm text-black font-semibold mx-2 ' >4,7/6</span>
                  <span className=' text-para-md text-black font-medium' >(322 Avis)</span>
                </div>
              </div>
            } indicator={<PlusIcon />}>
              <div className='my-10' >
                {defaultContent} {defaultContent} {defaultContent}
              </div>
            </AccordionItem>
            
          </Accordion>
        </div> 
        <div className="w-full bg-white pt-[60px] ">
          <div className="text-heading-xl font-medium mb-[48px] text-black" >Vous pourrez également apprécier </div>
            <div className="py-[42px]" >
              <ProductSlider/>
            </div>
        </div>
        <div className="w-full bg-white pt-[60px] ">
          <div className="text-heading-xl font-medium mb-[48px] text-black" >Sélectionn de nos partenaires</div>
          <div className="py-[42px]" >
            <ProductSlider/>
          </div>
        </div>
     </div>
     <Footer/>
    </div>
  )
}

export default ProductDetail
