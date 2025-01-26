"use client";

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Product from '@/components/Product';
import Uradio from '@/components/Uradio';
import Image from 'next/image'
import React, { useState } from 'react'

function ProductCategory() {
  const categories:String[] = ["Iphone X", "Iphone 8", "Iphone 11", "Iphone 12", "Iphone 12 pro","Iphone 13"]
  const availables:{title:string, code:string}[] =[
    {title:"Rouge", code:'#822828'},
    {title:"Bleu", code:'#4B8CE1'},
    {title:"Noir", code:'#000000'},
    {title:"Gris", code:'#D3CBCB'},
    {title:"Blanc", code:'#F2F2F2'},
    {title:"Rose", code:'#F779A3'},
    {title:"Vert", code:'#448228'},
    {title:"Jaune", code:'#E7DA46'}
  ];
  const [s, setS] = useState<number>(0)
  const [s2, setS2] = useState<number>(0)
  return (
    <div>
      <Header/>
      <div className=' px-10 lg:px-20 py-5 lg:py-12 bg-[#F6F6F7]' >
        <div className=' w-full relative rounded-[60px]' >
          <Image src={"/images/bannerCategory.png"} width={1352} height={303} layout='intrinsic' alt='banner' className='rounded-[60px] mx-auto' />
        </div>
        <div className='h-[1px] mt-5 lg:mt-0 lg:my-[57px] bg-[#A6A6A6]' ></div>
        <div className='sm:flex gap-4 my-11 lg:mb-[60px] flex-wrap hidden' >
          {
            categories.map((cat, m)=>(
              <div onClick={()=>setS(m)} key={m} className={`text-para-lg  px-9 py-3 rounded-[60px] ${m ==s ?  "text-white bg-[#193364]":"text-black bg-white"} `} >{cat}</div>
            ))
          }
        </div>
        <div className='flex justify-between gap-5 lg:gap-10  w-full flex-wrap sm:flex-nowrap ' >
          <div className=' w-full sm:w-[300px] lg:w-[513px]'  >
            <div className=' bg-white w-full rounded-[22px] py-[30px] h-44 overflow-y-auto   flex flex-1 flex-col' >
              <span className=' text-display-sm font-bold text-black mb-4 px-[26px]' >Catégories</span>
              <span className=' text-para-lg text-black px-[26px]' >Téléphone</span>
              <div className='mt-1' >
                <span className='bg-[#EBE0E0] text-black h-[43px] pl-[40px] flex items-center justify-start ' >Iphone</span>
                <span className=' text-black h-[43px] pl-[40px] flex items-center justify-start ' >Android</span>
                <span className=' text-black h-[43px] pl-[40px] flex items-center justify-start ' >Smartphone</span>
              </div>
            </div>
            <div className=' bg-white w-full rounded-[22px] py-[10px]   flex  flex-1 flex-col mt-4' >
              <span className=' text-display-sm font-bold text-black mb-2 px-[26px]' >Noeuf / Recondition</span>
              <div className='flex items-center gap-4 px-[26px]' >
                <Uradio/>
                <span className='text-black h-[43px] flex items-center justify-start ' >Noeuf (25)</span>
              </div>
              <div className='flex items-center gap-4 px-[26px]' >
                <Uradio/>
                <span className='text-black h-[43px] flex items-center justify-start ' >Reconditioné (2)</span>
              </div>
            </div>
            <div className=' bg-white w-full rounded-[22px] py-[30px]   flex flex-col mt-4' >
              <span className=' text-display-sm font-bold text-black mb-4 px-[26px]' >Couleur</span>
              <div className='mt-1 flex items-center justify-between gap-4 px-[26px] flex-wrap ' >
                {
                  availables.map((c,i)=>(
                    <div key={i*100} onClick={()=>setS2(i)} className=' cursor-pointer ' >
                      <div style={{backgroundColor:c.code}} className={`w-[40px] h-[40px] rounded-full ${s2==i?"border-2 border-black":""}  `} ></div>
                    </div>
                  ))
                }
              </div>
              
            </div>
          </div>
          <div className='flex gap-4 mb-[60px] flex-wrap sm:hidden' >
          {
            categories.map((cat, m)=>(
              <div onClick={()=>setS(m)} key={m} className={`text-para-lg  px-9 py-3 rounded-[60px] ${m ==s ?  "text-white bg-[#193364]":"text-black bg-white"} `} >{cat}</div>
            ))
          }
        </div>
          <div className='flex  flex-wrap gap-4 '  >
            <Product/> <Product/> <Product/> <Product/>
            {/* <Product/> <Product/> <Product/> <Product/> */}
          </div>
          
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductCategory  
