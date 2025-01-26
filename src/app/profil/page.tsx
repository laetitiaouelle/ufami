"use client";

import Header from '@/components/Header'
import Account from '@/components/profil/Account';
import ContactUs from '@/components/profil/ContactUs';
import Favorite from '@/components/profil/Favorite';
import Notifications from '@/components/profil/Notifications';
import Orders from '@/components/profil/Orders';
import React, { useState } from 'react'

function Profil() {

const list:string[] = ["Mon compte","Favoris","Commandes","Notifications", "Contactez-nous"]
// const related:string[] =["/images/compte.png", "/images/Fav.png","/images/commandes.png"] 

const [s, setS] = useState(0)

  return (
    <div className='bg-white'>
      <Header/>
      <div className='bg-white w-full h-screen px-20 py-12 flex items-start justify-center gap-5' >
        <div className=' w-[323px] h-[582px] border border-black px-[26px] py-4 gap-[26px] flex flex-col ' >
            {
                list.map((item,index)=>(
                    <div onClick={()=>setS(index)}  key={index} className='flex items-center  gap-2 cursor-pointer group ' >
                        <svg width="20" height="20" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='group-hover:!stroke-[#FF4243]' >
                            <path className='group-hover:!stroke-[#FF4243]' d="M1.5 30V28C1.5 23.58 5.08 20 9.5 20H17.5C21.92 20 25.5 23.58 25.5 28V30" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path className='group-hover:!stroke-[#FF4243]' d="M13.5 14C10.18 14 7.5 11.32 7.5 8C7.5 4.68 10.18 2 13.5 2C16.82 2 19.5 4.68 19.5 8C19.5 11.32 16.82 14 13.5 14Z" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className=' text-heading-md font-medium text-black group-hover:text-[#FF4243] ' >{item}</span>
                    </div>
                ))
            }
        </div>
        <div className='w-[1009px] h-[582px] relative flex items-start justify-start '>
            {
                s == 0 && 
                <Account />
            }
            {
                s == 1 && 
                <Favorite/>
            }
            {
                s == 2 && 
                <Orders />
            }
            {
                s == 3 && 
                <Notifications />
            }
            {
                s == 4 && 
                <ContactUs />
            }
        </div>

      </div>
    </div>
  )
}

export default Profil
