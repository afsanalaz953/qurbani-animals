import React from 'react';
import arrowImg from "@/assets/arrow.png";
import healthImg from "@/assets/healthcheck.png";
import sellerImg from "@/assets/seller.png";
import ageImg from "@/assets/age.png";
import Image from "next/image"


const Tips = () => {
    return (
        <div className='container mx-auto w-fit '>
          
            <h2 className='text-3xl font-bold my-10 text-center'>Qurbani Tips</h2>
        

<div className='grid md:grid-cols-2 lg:grid-cols-3  gap-6 m-0 '> 
          
             {/* card1 */}

                {/* <div className="card bg-slate-100 w-70 h-70 shadow-md border-0 rounded-2xl justify-start items-left" /> */}
                       
<div className="card bg-slate-100 w-70 h-70 shadow-md border-0 rounded-2xl justify-start items-left "> 
  
  <figure className="px-10 pt-10">
    <Image 
  src={healthImg}
  alt="arrow"
  width={80}
  height={80}
/>
  </figure>
 
 
  <div className="card-body items-center text-center">
    <h2 className="card-title ">Health Check</h2>
    <p className='line-clamp-3'>Always inspect the animal&apos;s health before purchase. Look for active behavior and clear eyes.</p>
   </div>
 
  
</div>
          {/* card2 */}
        <div className="card text-left bg-slate-100  w-70 h-70  shadow-md border-0 rounded-2xl">
 <figure className="px-10 pt-10">
  <Image 
 src={sellerImg}
   alt="arrow"
   width={80}
   height={80}
 />
   </figure>
   <div className="card-body items-center text-center">
     <h2 className="card-title">Verified Sellers</h2>
     <p>Buy only from verified sellers to ensure authenticity and quality of animals.</p>
   </div>
 </div>
           {/* card3 */}
 <div className="card bg-slate-100  w-70 h-70 shadow-md border-0 rounded-2xl items-center text-center">
   <figure className="px-10 pt-10  ">
     <Image 
   src={ageImg}
   alt="arrow"
   width={80}
   height={80}
  />
   </figure>
   <div className="card-body items-center text-center">
     <h2 className="card-title">Age Requirement</h2>
    <p>Ensure the animal meets the minimum age requirements for Qurbani according to Islamic guidelines.</p>
   </div>
 </div>
           {/* card4 */}

 </div> 

 </div>



    );
};

export default Tips;