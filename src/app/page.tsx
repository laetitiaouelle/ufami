"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductSlider from "@/components/ProductSlider";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center sm:-[35px] text-center text-para-sm lg:text-para-md text-white bg-[#4B4B4B] sm:px-0 px-3 py-2">
        Derniers jours Black Friday, jusqu&apos;à 40% de remise immédiate ! Nos magasins sont ouverts aujourd&apos;hui !
      </div>
      <Header/>
      <Slider />
      <div className='  items-center sm:hidden flex px-4 mt-8'>
          <div className=' w-full  h-[50px] rounded-[80px] px-[10px] py-[9px] border-[1px] border-[#C7C7C7] flex items-center '>
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
      <div className="bg-white w-full pt-4 sm:pt-10 lg:pt-[60px] px-10 lg:px-[64px]">
        <div className=" text-para-xl lg:text-display-md xl:text-heading-xl font-medium mb-6 lg:mb-[48px] text-black" >Meilleures offres</div>
        {/* <div className="flex overflow-x-auto hide-scrollbars" >
          <Product/> <Product/> <Product/> <Product/>
        </div> */}
        <ProductSlider/>
      </div>
      <div className="bg-white w-full pt-12 lg:pt-[60px] px-10 lg:px-[64px]" >
        <div className="  text-para-xl lg:text-display-md xl:text-heading-xl font-medium mb-6 lg:mb-[48px] text-black" >Nos produits du moment</div>
        {/* <div className="flex  overflow-x-auto hide-scrollbars">
          <Product/> <Product/> <Product/> <Product/>
        </div> */}
        <ProductSlider/>
      </div>
      <div className=" px-10 lg:px-20 py-10 xl:py-16 w-full bg-white">
        <div className="relative  w-full mb-10 lg:mb-14">
          <Image className="border-0 mx-auto " src={"/images/pub2.png"} width={1352} height={413} layout="intrinsic" alt="gg" />
        </div>
        <div className="relative  w-full " >
          <Image className="border-0 mx-auto" src={"/images/pub.png"} width={1352} height={303} layout="intrinsic" alt="gg" />
        </div>
      <div>
        
      </div>
      
      </div>
      <div className="w-full bg-white lg:pt-[60px] ">
          <div className="text-para-xl lg:text-display-md xl:text-heading-xl px-10 lg:px-20 font-medium mb-6 lg:mb-[48px] text-black" >Nouvelle arrivage</div>
          <div className=" px-10 lg:px-20 py-[42px] bg-[#F3F3F3]  " >
              {/* <div className="overflow-x-auto flex hide-scrollbars" >
                <Product/> <Product/> <Product/> <Product/>
              </div> */}
              <ProductSlider/>
          </div>
        </div>
      <Footer/>
    </div>
  );
}