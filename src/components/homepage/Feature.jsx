import React from 'react';
import Card from "@/components/ui/card"

const FeatureAnimals = async() => {
const res = await fetch("https://qurbani-animals.vercel.app/data.json",{
cache:"no-store"

});
const topAnimals = await res.json()
   console.log(topAnimals, "topAnimals"); 
   const topFeaturedAnimals = topAnimals.slice (0,4);
   console.log(topFeaturedAnimals);
   



    return (
        <div className='container mx-auto bg-slate-100 p-10'>
            <div className =' text-3xl font-bold text-center m-10'>Top Featured Animals</div>
              <div className='grid grid-cols-4'>
                {topFeaturedAnimals.map ((featureAnimals, ind) => {
                return <Card animals = {featureAnimals} key = {ind}/>
              })}
                
                </div>
           
        </div>
    );
};

export default FeatureAnimals;
