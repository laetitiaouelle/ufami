"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Product from '@/components/Product'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Uradio from '@/components/Uradio';
import CartProductItem from '@/components/CartProductItem';
import ProductSlider from '@/components/ProductSlider';


function Cart() {
  const [isconnected, setIsConnected] = useState<boolean>(false);
  return (
    <div>
      <div className="flex items-center justify-center sm:-[35px] text-center text-para-sm lg:text-para-md text-white bg-[#4B4B4B] sm:px-0 px-3 py-2">
        Derniers jours Black Friday, jusqu'à 40% de remise immédiate ! Nos magasins sont ouverts aujourd'hui !
      </div>
      <Header/>
      
      <div className={`p-10 sm:p-20 ${!isconnected?'bg-white':'bg-[#F3F3F3]'}`}>
          {
            isconnected? (
              <div className='flex gap-5 md:gap-14 lg:gap-16 xl:gap-20  flex-wrap  '>
                <div className=' flex flex-col w-full  lg:w-[428px] lg:flex-1  '>
                  <span className='block text-para-lg text-black mb-[36px] ' >Panier <span className=' text-para-md text-[#616B77] ' > (2 produits) </span></span>
                  <div className=' bg-white rounded-[22px] px-3 sm:px-[17px] py-[26px] w-full' >
                    <CartProductItem/>
                    <div className=' h-[1px] bg-[#c5c3c3] mx-10 my-3 sm:m-0 ' ></div>
                    <CartProductItem/>
                  </div>
                </div>
                <div className=' w-full lg:w-[372px] xl:w-[532px] xl:h-[538px]  '>
                  <div className='bg-white w-full rounded-[22px] px-[26px] py-[22px]'>
                    <div className='flex items-center justify-between'>
                      <span className=' text-para-lg xl:text-display-md font-bold text-black' >Total :</span>
                      <span className='text-para-lg xl:text-display-md font-bold text-black' >75 000 FCFA</span>
                    </div>
                    <div className='my-6 h-[2px] bg-[#A6A6A6] ' ></div>
                    <div className='flex items-center justify-between'>
                      <span className='text-label-md text-black' >Sous total :</span>
                      <span className='text-label-md font-bold text-black' >75 000 FCFA</span>
                    </div>
                    <div className='my-6 h-[2px] bg-[#A6A6A6] ' ></div>
                    <div className='flex items-center justify-between mb-6'>
                      <span className='text-label-md xl:text-para-lg font-bold text-black' >Livraison</span>
                      <span className='text-label-md xl:text-para-lg font-bold text-black' >Gratuite</span>
                    </div>
                    <div className='flex items-center justify-between mb-6'>
                        <div className=' flex items-center' >
                          <Uradio/>
                          <span className=' text-heading-xs xl:text-heading-sm font-medium text-black ml-2 xl:ml-4' >Livraison a domicile</span>
                        </div>
                        <div></div>
                    </div>
                    <div className='flex items-center justify-between mb-6'>
                        <div className=' flex items-center' >
                          <Uradio/>
                          <span className='text-heading-xs xl:text-heading-sm font-medium text-black ml-2 xl:ml-4' >Livraison en agence</span>
                        </div>
                        <div><span className='text-heading-xs xl:text-para-lg font-medium text-[#00346D]' >Choisir l'agence</span></div>
                    </div>
                    <div className='flex items-center justify-between mb-6'>
                        <div className=' flex items-center' >
                          <Uradio/>
                          <span className='text-heading-xs xl:text-heading-sm font-medium text-black ml-2 xl:ml-4' >Paiement échelonné (21 jours)</span>
                        </div>
                        <div><span className=' text-heading-xs xl:text-para-lg font-medium text-[#00346D]' >Changer</span></div>
                    </div>
                  </div>
                  <div className='mt-[26px] w-full h-[60px] border border-black rounded-[10.41] bg-white flex items-center justify-center p-2 '  >
                    <input type='text' placeholder='Saisir un code promo' className=' outline-none placeholder:text-heading-md text-heading-md placeholder:font-bold font-bold placeholder:text-[#A6A6A6] text-[#A6A6A6] w-full placeholder:text-center text-center ' />
                  </div>
                  <div className=' mt-[26px] h-[56px] w-full bg-[#EECF1C] rounded-full flex items-center justify-center' >
                      <span className=' text-heading-lg font-bold text-black ' >Valider mon paiement</span>
                  </div>
                </div>
              </div> 
            ):
            (
              <div className='w-full h-[440px] bg-[#F3F3F3] rounded-[22px]  flex flex-col items-center justify-center ' >
                <div className=' flex flex-col items-center justify-center mb-6 ' >
                  <div className=' w-[150px] h-[150px] rounded-full bg-[#C1C9D7] flex items-center justify-center mb-4 ' >
                      <Image src={"/images/cart-png.png"} alt='cart' width={62.5} height={70.65} />
                  </div>
                  <span className='text-label-lg font-semibold text-black' >
                    Votre panier est vide
                  </span>
                </div>
                <div className='flex items-center sm:flex-nowrap flex-wrap gap-3 px-3 justify-center ' >
                    <div className=' w-[152px] h-[50px] bg-[#EECF1C] flex items-center justify-center ' >
                      <span className=' text-black text-label-lg font-medium'>Se connecter</span>
                    </div>
                    <div onClick={()=>setIsConnected(!isconnected)} className=' w-[260px] h-[50px] bg-[#193364] flex items-center justify-center cursor-pointer ' >
                      <span className=' text-white text-label-lg font-medium'>Commencer vos achats</span>
                    </div>
                </div>
              </div>
            )
          }
      </div>
      
      <div  className={`w-full ${!isconnected?'bg-white':'bg-[#F3F3F3]'}`}>
          <div className="text-para-xl lg:text-display-md xl:text-heading-xl px-20 font-medium mb-[23px] text-black" >Ces produits  pourraient vous plaire</div>
          <div className={`px-20 py-[42px] ${isconnected?'bg-white':'bg-[#F3F3F3]'}`} >
            <ProductSlider/>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Cart
