"use client";

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Ubox from '@/components/Ubox';
import Link from 'next/link'
import React from 'react'

function UpdatePaymentInfo() {
  return (
    <div>
        <Header/>
        <div className='bg-[#F3F3F3] w-full flex items-center justify-center'>
        <div className='w-full flex justify-center py-20 ' >
            <div className=' bg-white rounded-[22px] py-[57px] px-[47px] w-[665px] ' >
                <span className='block text-black font-bold text-headinng-lg text-start w-full mb-6' >
                    Mon adresse de facturation
                </span>
                
                <div className='mt-6 w-full flex flex-col gap-7 mb-8 ' >
                    <div className='h-[50px] w-full border border-[#727272] px-4 flex items-center ' >
                        <input type='text' className='outline-none  w-full placeholder:text-[#727272] placeholder:font-semibold placeholder:text-label-lg bg-white text-[#727272] font-semibold text-label-lg' placeholder='Pays' />
                        <svg className='inline ml-[6px]' width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7.00285 7L13 1.35294" stroke="#727272" strokeWidth="1.73" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div className='h-[50px] w-full border border-[#727272] px-4 flex items-center' >
                        <input type='text' className='outline-none  w-full placeholder:text-[#727272] placeholder:font-semibold placeholder:text-label-lg bg-white text-[#727272] font-semibold text-label-lg' placeholder='Adresse*' />
                    </div>
                    <div className='h-[50px] w-full border border-[#727272] px-4 flex items-center' >
                        <input type='text' className='w-full outline-none  placeholder:text-[#727272] placeholder:font-semibold placeholder:text-label-lg bg-white text-[#727272] font-semibold text-label-lg' placeholder='Ville' />
                        <svg className='inline ml-[6px]' width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7.00285 7L13 1.35294" stroke="#727272" strokeWidth="1.73" strokeLinecap="round"/>
                        </svg>
                    </div>
                   
                </div>

                <span className='block text-black font-bold text-headinng-lg text-start w-full mb-6' >
                    Mes cordonnees de contact
                </span>

                <div className='mt-6 w-full flex flex-col mb-8 ' >

                    <div className='h-[50px] w-full border border-[#727272] px-4 flex items-center gap-7 ' >
                        <div className=' flex items-center justify-center gap-2 ' >
                            <span className='text-label-lg text-black font-medium ' >CIV</span>
                            <svg className='inline ml-[6px]' width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7.00285 7L13 1.35294" stroke="#727272" strokeWidth="1.73" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <input type='text' className='h- w-full outline-none  placeholder:text-[#727272] placeholder:font-semibold placeholder:text-label-lg bg-white text-[#727272] font-semibold text-label-lg' placeholder='N° de téléphone portable*' />
                    </div>

                    <div className='mb-10' >
                        <span className='text-[#727272] text-para-md my-4 block ' >Afin de recevoir le SMS de confirmation d&apos;expédition.</span>
                        <div className=' flex items-center gap-4 ' >
                            <Ubox/>
                            <span className=' text-[#727272] text-para-md ' >Choisir ce N° comme identifiant secondaire</span>
                        </div>
                    </div>
                    <div className='h-[50px] w-full border border-[#727272] px-4 flex items-center' >
                        <input type='text' className='outline-none w-full placeholder:text-[#727272] placeholder:font-semibold placeholder:text-label-lg bg-white text-[#727272] font-semibold text-label-lg' placeholder='Email de contact*' />
                    </div>

                    <div className='mb-10 mt-4' >
                        <div className=' flex items-center gap-4 ' >
                            <Ubox/>
                            <div>
                                <span className=' text-black font-semibold text-para-sm' >J&apos;accepte les conditions générales de Ufami</span>
                                <span className='text-[#868686] text-para-sm block underline ' >Voir les conditions générales.</span>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>

                <div  className='w-full flex flex-col' >
                    <div className='items-center flex justify-center'>
                        <Link href='/'  >
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

export default UpdatePaymentInfo
