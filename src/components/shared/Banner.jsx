import React from 'react';
import Link from "next/link";

const Banner = () => {
    return (
        <div className='bg-[#00772F] h-80 my-4 space-y-4 container mx-auto flex flex-col justify-center items-center'>
            <h1 className='font-bold text-5xl text-white'>Find Your Perfect Animal for Qurbani</h1>
            <p className='text-white font-bold text-lg'>Browse through our collection of healthy, verified animals from trusted <br />sellers across Bangladesh</p>
             <button className='btn btn-default'><Link href= '/allanimals'>Browse Animals</Link></button>
        </div>
    );
};

export default Banner;