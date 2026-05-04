"use client"
import React from 'react';
import {useForm} from "react-hook-form";

 import { ToastContainer, toast } from 'react-toastify';


const BookingForm = () => {
    const { register, handleSubmit,reset, formState: { errors }} = useForm();
 
    
        // const handleRegisterFunc = async(data) => {
        // console.log(data, "data");
        // const {name, email, password, phone} = data;
        
     const onSubmit = (data) => {
        console.log("Booking Data:", data);
        // const {name, email, password, phone} = data;
        
        // Show success toast
        toast.success('Booking successful! We will contact you soon.', {
            duration: 2000,
            position: 'top-center',
        });
        
        // Reset the form
        reset();
    };
    
    return (
      <div className='container mx-auto'>
      
        <h2 className='font-bold text-black-700 text-center text-3xl my-6'>Book This Animal</h2>
    
<div className='shadow-md border-[1] rounded-2xl container mx-auto'>

<form className='mx-50 flex flex-col w-900 my-10 ' onSubmit={handleSubmit(onSubmit)}>
  <fieldset className="fieldset  sm:w-50 md:w-100 lg:w-200">
      <legend className="fieldset-legend font-bold">Name</legend>
      <input type="text" className="input  sm:w-50 md:w-100 lg:w-200 bg-slate-200" placeholder="Enter Your Name" {...register("name", {
        required: "name is required",
      })} />
    {errors.name && <p> {errors.name.message} </p>} 
    </fieldset>
    
     <fieldset className="fieldset ">
      <legend className="fieldset-legend font-bold">Email</legend>
      <input type="text" className="input  sm:w-50 md:w-100 lg:w-200  bg-slate-200" placeholder="Enter Your Email" {...register("email",{
        required: "Email is required",
      })} />
    {errors.email && <p> {errors.email.message} </p>}
    </fieldset>
    
     <fieldset className="fieldset  sm:w-50 md:w-100 lg:w-200">
      <legend className="fieldset-legend font-bold">Phone Number</legend>
      <input type="text" className="input  sm:w-50 md:w-100 lg:w-200  bg-slate-200" placeholder="Phone" {...register("phone",{
        required: "Phone number is required",
      })} />
    {errors.phone && <p> {errors.phone.message} </p>}
    </fieldset>
    
    <fieldset className="fieldset sm:w-50  md:w-100 lg:w-200">
      <legend className="fieldset-legend font-bold"> Password </legend>
      <input type="password" className="input sm:w-50 md:w-100 lg:w-200  bg-slate-200 " placeholder="Enter your Password" {...register("password", { required: "password is require" })} />
       {errors.password && <p> {errors.password.message} </p>}
    </fieldset>
    <br />
    <button className='btn btn-default md:w-100 lg:w-200 text-white bg-black'>Book Now</button>
    
   </form>
    </div>
    
    
    
</div>

    );
};

export default BookingForm;