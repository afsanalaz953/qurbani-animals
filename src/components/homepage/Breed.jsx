import React from 'react';
import arrowImg from "@/assets/arrow.png";
import Image from "next/image"

const TopBreeds = () => {
    return (
        <div className='container mx-auto w-fit  bg-white my-10 p-6'>
          <h2 className='font-bold text-3xl text-center my-6'>Top Breeds</h2>

<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 m-0 justify-center items-center'>
            
             {/* card1 */}
<div className="card bg-base-100 w-60 shadow-md border-[1] rounded-2xl">
  <figure className="px-10 pt-10">
    <Image 
  src={arrowImg}
  alt="arrow"
  width={80}
  height={80}
/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title ">Friesian</h2>
    <p>High milk production</p>
  </div>
</div>
          {/* card2 */}
          <div className="card bg-base-100 w-60 shadow-md border-[1] rounded-2xl">
  <figure className="px-10 pt-10">
    <Image 
  src={arrowImg}
  alt="arrow"
  width={80}
  height={80}
/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Brahman</h2>
    <p>Premium quality bulls</p>
  </div>
</div>
          {/* card3 */}
          <div className="card bg-base-100 w-60 shadow-md border-[1] rounded-2xl">
  <figure className="px-10 pt-10">
    <Image 
  src={arrowImg}
  alt="arrow"
  width={80}
  height={80}
/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Black Bengal</h2>
    <p>Premium quality bulls</p>
  </div>
</div>
          {/* card4 */}
<div className="card bg-base-100 w-60 shadow-md border-[1] rounded-2xl">
  <figure className="px-10 pt-10">
    <Image 
  src={arrowImg}
  alt="arrow"
  width={80}
  height={80}
/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Dumba</h2>
    <p>Quality sheep</p>
  </div>
</div>

</div> 
         
        </div>
    );
};

export default TopBreeds;