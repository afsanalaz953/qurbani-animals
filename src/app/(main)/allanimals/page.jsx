import React from 'react';
import SortAnimals from "@/components/shared/SortAnimals"

const AllAnimalsPage = async() => {
    const res = await fetch("https://qurbani-animals.vercel.app/data.json",{
        cache:"no-store"
    });
    const allSortAnimals = await res.json();

    return (
        <div className='container mx-auto bg-slate-100'>
            <SortAnimals allSortAnimals={allSortAnimals} />
        </div>
    );
};

export default AllAnimalsPage;













// import React from 'react';
// import Card from "@/components/ui/card"
// import Link from "next/link"
// import Image from "next/image"

// import SortAnimals from "@/components/shared/SortAnimals"

// const AllAnimalsPage = async() => {

//     const res = await fetch("https://qurbani-animals.vercel.app/data.json",{
//         cache:"no-store"
//     });
//     const allSortAnimals = await res.json();
//     console.log(allSortAnimals, "allAnimals");

//     // const handleFilter = (e) =>{
//     //  const expectedPrice = allSortAnimals.filter ((animal) =>
//     //         allSortAnimals.price === "value");   
//     // }; 
//     // setPrices (expetedPrice);
//     // console.log (value , "setValue")
        


//     return (
//         <div className='container mx-auto bg-slate-100'>
//             <div className='flex justify-between mt-8 mx-4'>
//                 <h2 className='font-bold text-4xl text-center '>All Animals </h2>
//                 <div className=''> <p>Sort by price:</p>
//                     <p> <SortAnimals /> </p>
//                   {/* <div className="dropdown dropdown-start">
//   <div tabIndex={0} role="button" className="btn m-1 w-65">Low to High ⬇️</div>
//   <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-50 p-2 shadow-sm">
//     <li><a>Low to High</a></li>
//     <li><a>High to Low</a></li>
//   </ul>
// </div> */}

//                 </div>
//             </div>
          
// {/* 
// {/* 

//             {/* <div className='grid md:grid-cols-2   lg:grid-cols-3 gap-2 m-20 '>
//                 {allSortAnimals.map((animals, ind) => {
//                     return (
//                         <div key={ind} className="card bg-white shadow-sm w-max m-0 p-0">
//                             <figure className="px-10 pt-10">
//                                 <Image
//                                     src={animals.image}
//                                     alt="animals"
//                                     width={200}
//                                     height={50}
//                                     className="rounded-xl" 
//                                 />
//                             </figure>
//                             <div className="card-body items-center text-center">
//                                 <h2 className="card-title">{animals.name}</h2>
//                                 <p>Breed: {animals.breed}</p>
//                                 <p>Age: {animals.age}</p>
//                                 <p>Weight: {animals.weight}</p>
//                                 <p>Location: {animals.location}</p>
//                                 <p>Type: {animals.type}</p>
//                                 <p className='text-2xl font-bold text-green-500'>Price: {animals.price}</p>
//                                 <div className="card-actions">
//                                     <button className="btn btn-neutral font-bold w-full">
//                                         <Link href={`/animals/${animals.id}`}>View Details</Link>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })} */}
//             </div> */}
//         </div> 
//     );
// };

// export default AllAnimalsPage;






// import React from 'react';
// import Card from "@/components/ui/card"
// import Link from "next/link"
// import Image from "next/image"

// const AllAnimalsPage = async() => {

//     const res = await fetch("https://qurbani-animals.vercel.app/data.json",{
//         cache:"no-store"
//           });
//     const allSortAnimals = await res.json();
//     console.log(allSortAnimals, "allAnimals");

  

// // const FeatureAnimals = async() => {
// // const res = await fetch(,{
// // cache:"no-store"

// // });
// // const topAnimals = await res.json()
// //    console.log(topAnimals, "topAnimals"); 
// //    const topFeaturedAnimals = topAnimals.slice (0,4);
// //    console.log(topFeaturedAnimals);
   

//     return (
//         <div>
// <h2>  All Animals Page</h2>
//         <div className='grid grid-cols-3 gap-2 w-fit'>
//             {allSortAnimals.map ((animals, ind)=> {
//               return  
// <div animals= {animals} key={ind} className="card bg-white shadow-sm w-max >

//             // <div className="card bg-white shadow-sm w-max">
//   <figure className="px-10 pt-10 ">
//     <Image
//       src={animals.image}
//       alt="animals"
//       width={200}
//       height={50}
      
//       className="rounded-xl" />
//   </figure>
//   <div className="card-body items-center text-center">
//     <h2 className="card-title">{animals.name}</h2>
//     <p>Breed: {animals.breed}</p>
//     <p>Age: {animals.age}</p>
//     <p>Weight:{animals.weight}</p>
//     <p className='text-2xl font-bold text-green-500'>Price: {animals.price}</p>
   
//     <div className="card-actions">
//       <button className="btn btn-neutral font-bold w-full"> <Link href = "/animals">View Details</Link></button>
//     </div>
//   </div>
// </div>
//             })};

//         </div>

//         </div>
        

          
        
//     );
// };

// export default AllAnimalsPage;