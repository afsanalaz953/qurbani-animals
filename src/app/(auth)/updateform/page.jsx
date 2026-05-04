"use client"
import React, { useState, useEffect } from 'react';
import { authClient } from "@/lib/auth-client";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
 import { ToastContainer, toast } from 'react-toastify';
import loading from '@/app/loading';


const ProfileUpdateForm = () => {

 const router = useRouter();
  // const { data: session, isPending, refetch } = authClient.useSession();
  // // const [formData, setFormData] = useState({
  // //   name: '',
  // //   image: ''
  // // });
  const { data: session, isPending } = authClient.useSession();
  console.log (session, "profilesession")
  
  const user = session?.user;
  console.log (user, "profilesession");



  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value   
    const image =e.target.image.value  
  
  await authClient.updateUser({
    name,
    image,
    
})

  toast.success('update successful.', {
            duration: 2000,
            position: 'top-center',
        });
        

  };

    return (
        <div className='container mx-auto '>
           <h2 className='font-bold m-6'> update form</h2>
            {isPending ? (
            <div className='flex gap-2 items-center justify-center p-20'>
                <span className="loading loading-spinner text-success"></span>
                <span>Loading user data...</span>
            </div>
        ) : (

          <div className='bg-white rounded-xl w-150 mx-auto p-20 my-10  gap-4  '>          
    <form onSubmit={onSubmit}>
       <fieldset className="fiedset">
              <legend className="fieldset-legend font-bold ">Name </legend>
              <input type="text" name="name" className="input" placeholder="Enter Your Name" defaultValue={user?.name || ''}  />
            </fieldset>
            
            <fieldset className="fieldset ">
              <legend className="fieldset-legend font-black"> Image Url </legend>
              <input type= "url" name="image" className="input" placeholder="Photo Url" defaultValue={user?.image || ''}  />
            </fieldset>
            
             
            <br />
            <button type="submit"   className='btn btn-primary '> update</button>
            <br />
            <br />

            <button className='btn btn-default bg-green-300'> <Link href= "/profile">Profile</Link></button>
           
 </form>
 </div>
  )}      
 </div>
 
    );

  }


export default ProfileUpdateForm;
