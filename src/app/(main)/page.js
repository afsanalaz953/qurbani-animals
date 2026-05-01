import Image from "next/image";
import Banner from "@/components/shared/Banner";
import Feature from "@/components/homepage/Feature";
import Tips from "@/components/homepage/Tips";
import Breed from "@/components/homepage/Breed"

export default function Home() {
  return (
   <div className="bg-white">
   
    <Banner></Banner>
   <Feature></Feature>
   <Tips></Tips>
   <Breed></Breed>

   
   
   </div>
  
  );
}
