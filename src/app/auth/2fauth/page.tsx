import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function OtpVerif() {
  return (
    <div className='bg-[#F3F3F3] relative w-full h-screen flex flex-col items-center justify-start p-20'>
      <span className=' text-black text-[22px] leading-[24px] font-semibold mb-6 ' >Verifiez votre e-mail</span>
      <span className='text-para-lg text-black mb-3 ' >Nous avons envoyé un code de vérification a :</span>
      <span className='text-para-lg text-black mb-12' >yannpatrick@gmail.com </span>
      <div className='flex items-center justify-center gap-11 mb-12' >
        <div className=' w-[70px] h-[60px] border-[2px] border-[#193364] '>
            <input className=' w-full h-full text-center text-[#727272] outline-none bg-transparent px-2' />
        </div>
        <div className=' w-[70px] h-[60px] border-[2px] border-[#193364] '>
            <input className=' w-full h-full text-center text-[#727272] outline-none bg-transparent px-2' />
        </div>
        <div className=' w-[70px] h-[60px] border-[2px] border-[#193364] '>
            <input className=' w-full h-full text-center text-[#727272] outline-none bg-transparent px-2' />
        </div>
        <div className=' w-[70px] h-[60px] border-[2px] border-[#193364] '>
            <input className=' w-full h-full text-center text-[#727272] outline-none bg-transparent px-2' />
        </div>
      </div>
      <div className='items-center flex justify-center mb-5'>
        <Link href=' /profil/update-user-info'>
            <div  className='cursor-pointer bg-[#193364] text-white font-semibold w-80  h-10 rounded-[60px] flex items-center justify-center ' >
                Soumettre
            </div>
        </Link>
      </div>
      <span className=' text-[14px] font-medium text-black ' >
        Vous n’avez pas recu de code, cela peut prendre un peu<br/>de temps, redemandez un nouveau code dans <span className=' text-[#193364] ' >28 secondes</span>
      </span>


      <div className='absolute right-0 bottom-0' >
        <div className='mr-[50px] mb-[30px]' >
            <Image width={102} height={42} alt={'ufami'} src={"/images/U’FAMI.png"} />
        </div>
      </div>
    </div>
  )
}

export default OtpVerif
