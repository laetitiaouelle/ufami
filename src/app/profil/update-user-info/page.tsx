"use client";

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Uradio from '@/components/Uradio'
import Link from 'next/link'
import React from 'react'

function UpdateUserInfo() {
  return (
    <div>
        <Header/>
        <div className='bg-[#F3F3F3] w-full flex items-center justify-center'>
        <div className='w-full flex justify-center py-20 ' >
            <div className=' bg-white rounded-[22px] py-[57px] px-[47px] w-[665px] ' >
                <span className=' block text-black font-bold text-headinng-lg text-start w-full mb-6 ' >
                    Informations personelles
                </span>
                <div>
                    <span className=' text-label-lg text-[#727272] font-medium ' >Civilité*</span>
                    <div className='flex items-center justify-start mt-6 gap-12 ' >
                        <div className='flex items-center justify-start gap-4'  >
                            <Uradio/>
                            <span className=' text-black font-medium ' >Madame</span>
                        </div>
                        <div className='flex items-center justify-start gap-4'  >
                            <Uradio/>
                            <span className=' text-black font-medium ' >Monsieur</span>
                        </div>
                    </div>
                </div>
                <div className='mt-6 w-full flex flex-col gap-7' >
                    <div className='h-[50px] w-full border border-[#727272] px-4 flex items-center ' >
                        <input type='text' className='outline-none  w-full placeholder:text-[#727272] placeholder:font-semibold placeholder:text-label-lg bg-white text-[#727272] font-semibold text-label-lg' placeholder='Nom*' />
                    </div>
                    <div className='h-[50px] w-full border border-[#727272] px-4 flex items-center' >
                        <input type='text' className=' outline-none w-full placeholder:text-[#727272] placeholder:font-semibold placeholder:text-label-lg bg-white text-[#727272] font-semibold text-label-lg' placeholder='Prénoms*' />
                    </div>
                    <div className='h-[50px] w-full border border-[#727272] px-4 flex items-center' >
                        <input type='text' className=' outline-none w-full placeholder:text-[#727272] placeholder:font-semibold placeholder:text-label-lg bg-white text-[#727272] font-semibold text-label-lg' placeholder='Date de Naissance*' />
                    </div>
                   <div className='items-center flex justify-center'>
                        <Link href='/profil/update-payment-info'  >
                            <div  className='cursor-pointer bg-[#193364] text-white font-semibold w-80  h-10 rounded-[60px] flex items-center justify-center ' >
                                Valider
                            </div>
                        </Link>
                   </div>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default UpdateUserInfo
