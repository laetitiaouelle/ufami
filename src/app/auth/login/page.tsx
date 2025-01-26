import Link from 'next/link'
import React from 'react'

function Login() {
  return (
    <div className='bg-[#F3F3F3] w-full h-screen flex items-center justify-center'>
      {/* <div className='flex items-center justify-end' >
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="23" viewBox="0 0 17 23" fill="none">
            <path d="M16 1L2 11.505L15.1765 22" stroke="#727272" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <span className=' text-black text-para-md underline ml-2 ' >Retour</span>
      </div> */}
      <div className='w-full flex items-center justify-center ' >
        <div className=' bg-white rounded-[22px] py-[57px] px-[47px] w-[665px] ' >
            <span className='text-heading-lg text-black text-center w-full block font-bold' >Bienvenue chez U’fami</span>
            <span className=' block text-black text-para-lg text-center w-full mt-4 mb-6'>
                Saisissez votre e-mail pour vous connecter<br/>ou un créer un compte
            </span>
            <span className=' block text-black font-bold text-headinng-lg text-center w-full mt-4 mb-6 ' >
                Déjà client ?
            </span>
            <div className='mt-6 w-full flex flex-col gap-7' >
                <div className='h-[50px] w-full border border-[#727272] px-4 flex items-center ' >
                    <input type='text' className='h- w-full placeholder:text-[#727272] placeholder:font-semibold placeholder:text-label-lg outline-none bg-white text-[#727272] font-semibold text-label-lg' placeholder='Email' />
                </div>
                <div className='h-[50px] w-full border border-[#727272] px-4 flex items-center' >
                    <input type='text' className='w-full placeholder:text-[#727272] placeholder:font-semibold placeholder:text-label-lg outline-none bg-white text-[#727272] font-semibold text-label-lg' placeholder='Mot de passe' />
                </div>
                <div  className='cursor-pointer bg-[#193364] text-white font-semibold h-10 rounded-[60px] flex items-center justify-center ' >
                    Se connecter
                </div>
                <div className=' h-6 flex justify-between items-center gap-[26px] ' >
                    <span className='flex-1 flex h-[2px] bg-[#727272] ' ></span>
                    <span className=' text-[#727272] text-label-lg font-medium' >ou avec</span>
                    <span className='flex-1 flex h-[2px] bg-[#727272] ' ></span>
                </div>
                <div className=' flex items-center justify-center ' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                        <rect width="58" height="58" rx="29" fill="#D9D9D9"/>
                        <g clipPath="url(#clip0_1575_10269)">
                        <path d="M49.5852 29.4044C49.5852 27.6535 49.445 26.3758 49.1415 25.0508H29.4121V32.9535H40.9928C40.7594 34.9174 39.4986 37.8751 36.6968 39.8625L36.6575 40.1271L42.8956 45.0244L43.3278 45.0681C47.2969 41.3533 49.5852 35.8875 49.5852 29.4044Z" fill="#4285F4"/>
                        <path d="M29.4128 50.2239C35.0864 50.2239 39.8494 48.331 43.3285 45.0658L36.6975 39.8603C34.923 41.1143 32.5414 41.9898 29.4128 41.9898C23.8559 41.9898 19.1396 38.2751 17.4583 33.1406L17.2119 33.1618L10.7255 38.249L10.6406 38.488C14.0962 45.4443 21.1941 50.2239 29.4128 50.2239Z" fill="#34A853"/>
                        <path d="M17.4575 33.1401C17.0139 31.8151 16.7572 30.3953 16.7572 28.9284C16.7572 27.4613 17.0139 26.0417 17.4342 24.7167L17.4225 24.4345L10.8547 19.2656L10.6398 19.3692C9.21564 22.2559 8.39844 25.4975 8.39844 28.9284C8.39844 32.3592 9.21564 35.6007 10.6398 38.4874L17.4575 33.1401Z" fill="#FBBC05"/>
                        <path d="M29.4128 15.8668C33.3586 15.8668 36.0203 17.5941 37.538 19.0375L43.4685 13.1695C39.8263 9.73866 35.0864 7.63281 29.4128 7.63281C21.1941 7.63281 14.0962 12.4123 10.6406 19.3686L17.435 24.7161C19.1396 19.5817 23.8559 15.8668 29.4128 15.8668Z" fill="#EB4335"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1575_10269">
                        <rect width="41.2105" height="42.7368" fill="white" transform="translate(8.39453 7.63281)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className=' flex items-center justify-center ' >
                    <span className=' text-para-md text-[#727272] font-medium ' >Vous n&apos;avez pas encore de compte <Link href='/auth/register' ><span className=' text-[#193364]  font-semibold cursor-pointer ' >Créer un compte</span></Link></span>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Login
