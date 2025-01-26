
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function Header() {
  return (
    <div>
      <div className=' py-8 lg:py-[48px] px-10 lg:px-16 xl:px-[103px] bg-white flex justify-between' >
        <div className='flex items-center justify-between  ' >
            <div className=' mr-7 lg:mr-[50px]' >
                <Image width={102} height={42} layout='intrinsic' alt={'ufami'} src={"/images/U’FAMI.png"} />
            </div>
            <div className='  items-center hidden sm:flex '>
                <div className=' lg:w-[330px] xl:w-[520px] h-9 lg:h-[50px] rounded-[80px] px-[10px] py-[9px] border-[1px] border-[#C7C7C7] flex items-center mr-[8px]'>
                   <span className=' w-6 h-6 lg:w-[28px] lg:h-[28px]  mr-[8px] flex items-center justify-center'>
                        <svg  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.29188 6.21892C5.569 6.93217 4.99436 7.78137 4.60102 8.71763C4.20769 9.65388 4.00345 10.6587 4.00004 11.6742C3.99664 12.6897 4.19415 13.6959 4.5812 14.6347C4.96825 15.5736 5.5372 16.4266 6.25528 17.1447C6.97336 17.8628 7.82639 18.4317 8.76526 18.8188C9.70413 19.2058 10.7103 19.4034 11.7258 19.4C12.7413 19.3966 13.7461 19.1923 14.6824 18.799C15.6186 18.4056 16.4678 17.831 17.1811 17.1081C18.6091 15.6608 19.4068 13.7074 19.4 11.6742C19.3931 9.64099 18.5824 7.69299 17.1447 6.25528C15.707 4.81757 13.759 4.00685 11.7258 4.00004C9.69258 3.99323 7.73919 4.79087 6.29188 6.21892ZM15.2015 15.1285C14.7465 15.5836 14.2063 15.9445 13.6117 16.1908C13.0172 16.437 12.38 16.5638 11.7365 16.5638C11.093 16.5638 10.4558 16.437 9.86124 16.1908C9.26671 15.9445 8.72651 15.5836 8.27148 15.1285C7.81645 14.6735 7.4555 14.1333 7.20924 13.5388C6.96298 12.9442 6.83623 12.307 6.83623 11.6635C6.83623 11.02 6.96298 10.3828 7.20924 9.78828C7.4555 9.19375 7.81645 8.65355 8.27148 8.19852C9.19046 7.27954 10.4369 6.76327 11.7365 6.76327C13.0361 6.76327 14.2825 7.27954 15.2015 8.19852C16.1205 9.11749 16.6367 10.3639 16.6367 11.6635C16.6367 12.9631 16.1205 14.2095 15.2015 15.1285Z" fill="#C7C7C7"/>
                            <path d="M15.6954 18.5939C15.5003 18.3988 15.3456 18.1672 15.24 17.9124C15.1344 17.6575 15.0801 17.3843 15.0801 17.1085C15.0801 16.8326 15.1344 16.5595 15.24 16.3046C15.3456 16.0497 15.5003 15.8182 15.6954 15.6231C15.8904 15.428 16.122 15.2733 16.3769 15.1677C16.6317 15.0621 16.9049 15.0078 17.1808 15.0078C17.4566 15.0078 17.7298 15.0621 17.9846 15.1677C18.2395 15.2733 18.4711 15.428 18.6662 15.6231L23.6152 20.5735C23.8157 20.7672 23.9757 20.9989 24.0858 21.2551C24.1958 21.5113 24.2538 21.7869 24.2562 22.0657C24.2586 22.3446 24.2055 22.6211 24.0999 22.8792C23.9943 23.1373 23.8384 23.3717 23.6412 23.5689C23.444 23.7661 23.2095 23.922 22.9515 24.0276C22.6934 24.1332 22.4168 24.1863 22.138 24.1839C21.8592 24.1815 21.5836 24.1236 21.3274 24.0135C21.0712 23.9034 20.8395 23.7435 20.6458 23.5429L15.6954 18.5939Z" fill="#C7C7C7"/>
                        </svg>
                   </span>
                   <input className='block text-[#C7C7C7] outline-none text-label-xl font-medium placeholder:text-[#C7C7C7] placeholder:text-label-md plg:laceholder:text-label-xl placeholder:font-medium w-full' placeholder='Rechercher'  type='text' />
                </div>
                    {
                        /* <div className=' w-[152px] h-[50px] bg-[#EECF1C] p-[13px]'>
                            <span className=' text-black text-label-lg font-medium block '>RECHERCHER</span>
                        </div>*/
                    }
            </div>
        </div>
        <div className='flex items-center'>
            <Link  href="/auth/login">
                <div className='flex flex-col items-center ml-8 md:ml-[50px]' >
                    <svg width="24" height="24" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 30V28C1.5 23.58 5.08 20 9.5 20H17.5C21.92 20 25.5 23.58 25.5 28V30" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.5 14C10.18 14 7.5 11.32 7.5 8C7.5 4.68 10.18 2 13.5 2C16.82 2 19.5 4.68 19.5 8C19.5 11.32 16.82 14 13.5 14Z" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className=' text-heading-xs lg:text-label-lg font-semibold hidden sm:block mt-[3px] text-black ' >Connexion</span>
                </div>
            </Link>
                <div className='flex flex-col items-center ml-8 md:ml-[50px]' >
                    <svg width="24" height="24" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5007 25.6654C16.033 25.6673 17.5507 25.3664 18.9664 24.7799C20.3821 24.1935 21.668 23.3331 22.7502 22.2482C23.8351 21.166 24.6954 19.8801 25.2819 18.4644C25.8683 17.0487 26.1692 15.5311 26.1673 13.9987C26.1692 12.4663 25.8683 10.9487 25.2819 9.53299C24.6954 8.11728 23.8351 6.83139 22.7502 5.74921C21.668 4.6643 20.3821 3.80392 18.9664 3.21749C17.5507 2.63106 16.033 2.33015 14.5007 2.33204C12.9683 2.33015 11.4507 2.63106 10.0349 3.21749C8.61923 3.80392 7.33334 4.6643 6.25116 5.74921C5.16625 6.83139 4.30587 8.11728 3.71944 9.53299C3.13302 10.9487 2.8321 12.4663 2.83399 13.9987C2.8321 15.5311 3.13302 17.0487 3.71944 18.4644C4.30587 19.8801 5.16625 21.166 6.25116 22.2482C7.33334 23.3331 8.61923 24.1935 10.0349 24.7799C11.4507 25.3664 12.9683 25.6673 14.5007 25.6654Z" stroke="#1E1E1E" strokeWidth="3" strokeLinejoin="round"/>
                        <path d="M14.5 16.6966V14.3633C15.1922 14.3633 15.8689 14.158 16.4445 13.7734C17.0201 13.3888 17.4687 12.8422 17.7336 12.2027C17.9985 11.5631 18.0678 10.8594 17.9327 10.1805C17.7977 9.50153 17.4644 8.87789 16.9749 8.38841C16.4854 7.89893 15.8617 7.56558 15.1828 7.43053C14.5039 7.29549 13.8001 7.3648 13.1606 7.6297C12.5211 7.89461 11.9744 8.34321 11.5899 8.91879C11.2053 9.49436 11 10.171 11 10.8633" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.5013 21.9479C14.8881 21.9479 15.259 21.7943 15.5325 21.5208C15.806 21.2473 15.9596 20.8764 15.9596 20.4896C15.9596 20.1028 15.806 19.7319 15.5325 19.4584C15.259 19.1849 14.8881 19.0312 14.5013 19.0312C14.1145 19.0312 13.7436 19.1849 13.4701 19.4584C13.1966 19.7319 13.043 20.1028 13.043 20.4896C13.043 20.8764 13.1966 21.2473 13.4701 21.5208C13.7436 21.7943 14.1145 21.9479 14.5013 21.9479Z" fill="#1E1E1E"/>
                    </svg>
                    <span className=' text-heading-xs lg:text-label-lg font-semibold hidden sm:block mt-[3px]  text-black' >Aide</span>
                </div>
            <Link  href="/cart">
                <div className='flex flex-col items-center ml-8 md:ml-[50px]' >
                    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="27" height="27" stroke="white"/>
                        <path d="M19.8327 20.9987C20.4515 20.9987 21.045 21.2445 21.4826 21.6821C21.9202 22.1197 22.166 22.7132 22.166 23.332C22.166 23.9509 21.9202 24.5444 21.4826 24.9819C21.045 25.4195 20.4515 25.6654 19.8327 25.6654C19.2138 25.6654 18.6204 25.4195 18.1828 24.9819C17.7452 24.5444 17.4993 23.9509 17.4993 23.332C17.4993 22.037 18.5377 20.9987 19.8327 20.9987ZM1.16602 2.33203H4.98102L6.07768 4.66536H23.3327C23.6421 4.66536 23.9389 4.78828 24.1576 5.00707C24.3764 5.22587 24.4994 5.52261 24.4994 5.83203C24.4994 6.03036 24.441 6.2287 24.3594 6.41536L20.1827 13.9637C19.786 14.6754 19.016 15.1654 18.141 15.1654H9.44935L8.39935 17.067L8.36435 17.207C8.36435 17.2844 8.39508 17.3586 8.44978 17.4133C8.50447 17.468 8.57866 17.4987 8.65602 17.4987H22.166V19.832H8.16602C7.54718 19.832 6.95368 19.5862 6.5161 19.1486C6.07852 18.711 5.83268 18.1175 5.83268 17.4987C5.83268 17.0904 5.93768 16.7054 6.11268 16.3787L7.69935 13.5204L3.49935 4.66536H1.16602V2.33203ZM8.16602 20.9987C8.78485 20.9987 9.37835 21.2445 9.81593 21.6821C10.2535 22.1197 10.4993 22.7132 10.4993 23.332C10.4993 23.9509 10.2535 24.5444 9.81593 24.9819C9.37835 25.4195 8.78485 25.6654 8.16602 25.6654C7.54718 25.6654 6.95368 25.4195 6.5161 24.9819C6.07852 24.5444 5.83268 23.9509 5.83268 23.332C5.83268 22.037 6.87102 20.9987 8.16602 20.9987ZM18.666 12.832L21.9094 6.9987H7.16268L9.91602 12.832H18.666Z" fill="black"/>
                    </svg>
                    <span className=' text-heading-xs lg:text-label-lg font-semibold hidden sm:block mt-[3px]  text-black' >Panier</span>
                </div>
            </Link>
        </div>
      </div>
      <div className=' py-[18px] px-10 lg:px-20 flex items-center  bg-[#1E242F] ' >
        <svg className="md:block hidden" width="30" height="23" viewBox="0 0 38 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="38" height="5" rx="2.5" fill="white"/>
            <rect y="9" width="38" height="5" rx="2.5" fill="white"/>
            <rect y="18" width="38" height="5" rx="2.5" fill="white"/>
        </svg>
        <nav>
            <ul className='inline ml-2 mr-8  md:mr-[50px] ' >
                <li className='inline'>
                    <Link href="/"><span className=' text-heading-xs lg:text-label-lg font-semibold text-white ' >Produits</span></Link>
                </li> 
            </ul>
            <ul className='inline mr-8  md:mr-[50px] ' >
                <li className='inline'>
                    <a className=' text-heading-xs lg:text-label-lg font-semibold text-white ' >Parrainage</a>
                </li> 
            </ul>
            <ul className='inline mr-8  md:mr-[50px] ' >
                <li className='inline'>
                    <a className=' text-heading-xs lg:text-label-lg font-semibold text-white ' >Saint valentin</a>
                </li> 
            </ul>
            <ul className='inline mr-8  md:mr-[50px] ' >
                <li className='inline'>
                    <Link href="/new"><span className=' text-heading-xs lg:text-label-lg font-semibold text-white ' >Nouveautés</span></Link>
                </li> 
            </ul>
            <ul className='inline ' >
                <li className='inline'>
                    <Link href="/category/1"><span className=' text-heading-xs lg:text-label-lg font-semibold text-white  ' >Categories</span></Link>
                    <svg className='inline ml-[6px]' width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7.00285 7L13 1.35294" stroke="white" strokeWidth="1.73" strokeLinecap="round"/>
                    </svg>
                </li> 
            </ul>
        </nav>
      </div>
      
    </div>
  )
}

export default Header