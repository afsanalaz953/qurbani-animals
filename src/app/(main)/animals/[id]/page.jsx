
import React from 'react';
import Image from "next/image";
import BookingForm from "@/components/singleanimal/BookingForm"

 
const AnimalDetailsPage = async({params}) => {


    const {id} = await params;
    console.log(id, "id");

    const res = await fetch("https://qurbani-animals.vercel.app/data.json",{
cache:"no-store"

});
const allAnimals = await res.json();
console.log(allAnimals, "singleAnimals");

const singleAnimal = allAnimals.find (animal => animal.id === parseInt(id))

console.log(singleAnimal);

    return (
        <div className='container mx-auto'>
           <h2 className='font-bold text-green-700 text-center text-3xl my-6' >Animal Details </h2> 
           
            <div className="card container mx-auto border-0 m-10 p-10 bg-base-100 w-max shadow-md grid grid-cols-2 gap-2" >
  <figure >
    <Image
      src={singleAnimal.image}
      referrerPolicy='no-referrer'
      alt="animals" 
      width = {500}
      height = {500}
      className='rounded-3xl'
      />
  </figure>
  <div className="card-body">
    <h1 className="card-title text-4xl font-bold">{singleAnimal.name}</h1>
    <p className="text-2xl font-bold text-green-600"> Price: {singleAnimal.price} </p>
     <p> Type: {singleAnimal.type}</p>
     <p> Breed: {singleAnimal.breed}</p>
    <p> Weight: {singleAnimal.weight}</p>
    <p> Age: {singleAnimal.age}</p>
    <p> Location: {singleAnimal.location}</p>
    <p> Category: {singleAnimal.category}</p>
    <p> Description: {singleAnimal.description}</p> 
  </div>
</div>

<div className='container mx-auto '>
    <BookingForm />
</div>



</div>

       
    );
};

export default AnimalDetailsPage;