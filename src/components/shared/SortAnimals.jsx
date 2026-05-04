"use client"
import React from 'react';
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const SortAnimals = ({ allSortAnimals }) => {
  const [sortOrder, setSortOrder] = useState(null);
  
  if (!allSortAnimals) {
    return <div className="text-center py-10">Loading...</div>;
  }

  const displayedAnimals = sortOrder 
    ? [...allSortAnimals].sort((a, b) => {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      })
    : allSortAnimals;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="gap-4 mb-6 flex justify-between mt-8 mx-4">
         <h2 className='font-bold text-4xl text-center '>All Animals </h2>
        <div className="dropdown dropdown-start ">
          <p>Sort by price:</p>
          <div tabIndex={0} role="button" className="btn m-1 w-65 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"> Click ⬇️
            
            {sortOrder === 'asc' ? '' : ' '}
          </div>
          <ul tabIndex="-1" className="dropdown-content menu bg-white rounded-lg shadow-lg z-10 w-50 p-2">
            <li onClick={() => setSortOrder('asc')} className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a>Low to High</a>
            </li>
            <li onClick={() => setSortOrder('desc')} className="cursor-pointer hover:bg-gray-100 p-2 rounded">
              <a>High to Low</a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Add this section to display sorted animals */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {displayedAnimals.map((animals, ind) => {
          return (
            <div key={ind} className="card bg-white shadow-sm w-max m-0 p-0">
              <figure className="px-10 pt-10">
                <Image
                  src={animals.image}
                  alt="animals"
                  width={200}
                  height={50}
                  className="rounded-xl w-fit" 
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{animals.name}</h2>
                <p>Breed: {animals.breed}</p>
                <p>Age: {animals.age}</p>
                <p>Weight: {animals.weight}</p>
                <p>Location: {animals.location}</p>
                <p>Type: {animals.type}</p>
                <p className='text-2xl font-bold text-green-500'>Price: {animals.price}</p>
                <div className="card-actions">
                  <button className="btn btn-neutral font-bold w-full">
                    <Link href={`/animals/${animals.id}`}>View Details</Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SortAnimals;










// "use client"
// import React from 'react';
// import { useState } from 'react';

// const SortAnimals = ({ allSortAnimals }) => {
//   const [sortOrder, setSortOrder] = useState('asc');
  
//   // Fixed: Added loading state check before using it
//   if (!allSortAnimals) {
//     return <div className="text-center py-10">Loading...</div>;
//   }

//   const sortedAnimals = [...allSortAnimals].sort((a, b) => {
//     return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
//   });

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex gap-4 mb-6">
//         <div className="dropdown dropdown-start">
//           <div tabIndex={0} role="button" className="btn m-1 w-65 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">
//             {sortOrder === 'asc' ? 'Low to High ⬆️' : 'High to Low ⬇️'}
//           </div>
//           <ul tabIndex="-1" className="dropdown-content menu bg-white rounded-lg shadow-lg z-10 w-50 p-2">
//             <li onClick={() => setSortOrder('asc')} className="cursor-pointer hover:bg-gray-100 p-2 rounded">
//               <a>Low to High</a>
//             </li>
//             <li onClick={() => setSortOrder('desc')} className="cursor-pointer hover:bg-gray-100 p-2 rounded">
//               <a>High to Low</a>
//             </li>
//           </ul>
//         </div>
//       </div>
        
      
//     </div>


//     )
    
// };

// export default SortAnimals;