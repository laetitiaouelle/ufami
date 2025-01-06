import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Product from "@/components/Product";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center h-[35px] text-para-md text-white">
        Derniers jours Black Friday, jusqu'à 40% de remise immédiate ! Nos magasins sont ouverts aujourd'hui !
      </div>
      <Header/>
      <div className="bg-white w-full pt-[60px] px-[64px]">
        <div className="text-heading-xl font-medium mb-[48px]" >Meilleures offres</div>
        <div className="flex" >
          <Product/> <Product/> <Product/> <Product/>
        </div>
      </div>
      <div className="bg-white w-full py-[60px] px-[64px]" >
        <div className="text-heading-xl font-medium mb-[48px]" >Nos produits du moment</div>
        <div className="flex">
          <Product/> <Product/> <Product/> <Product/>
        </div>
      </div>
      <div className="px-20 py-16 w-full bg-white">
        <div className="relative w-full h-[417px] mb-14">
          <Image className="absolute" src={"/images/pub2.png"} fill alt="gg" />
        </div>
        <div className="relative w-full h-[303px]" >
          <Image className="absolute" src={"/images/pub.png"} fill alt="gg" />
        </div>
      <div>
        <div className="w-full pt-[60px] ">
          <div className="text-heading-xl font-medium mb-[48px]" >Nouvelle arrivage</div>
          <div className="px-[64px] flex bg-[#F3F3F3]" >
            <Product/> <Product/> <Product/> <Product/>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}