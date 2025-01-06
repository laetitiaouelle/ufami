import React from 'react'
import Image from "next/image";


function Product() {
  return (
    <div className="relative w-[323px] h-[430px] border border-black rounded-[26px] mr-5">
        <div className=" w-full h-full p-1" >
            <div className="h-[220px] flex items-center justify-center " >
            <Image alt="produit" src={'/images/produit.png'} width={190} height={100} />
            </div>
        </div>
        <div className=" absolute top-[8px] right-[8px] " > 
            <div className=" w-[36] h-[36] rounded-full flex items-center justify-center bg-[#F6F6F7] " >
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.64127 4.49589C3.44804 -1.0421 8.19563 2.08735 9.24426 3.77358C13.0042 -1.18739 17.3917 2.72314 17.553 5.25327C18.0564 13.1446 11.6867 16.0427 9.63612 17.6477C7.1745 15.8134 -0.425649 10.8313 1.64127 4.49589Z" stroke="black"/>
            </svg>
            </div>
        </div>
    </div>
  )
}

export default Product
