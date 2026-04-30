"use client"
import React from 'react';
import Link from "next/link";
import { useForm } from "react-hook-form";
import {authClient} from "@/lib/auth-client";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react';





const LoginPage = () => {
const { register, handleSubmit,  formState: { errors }} = useForm ();
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm

const [isShowPassword, setIsShowPassword] = useState(false);

 const handleGoogleSignin = async () => {
const data = await authClient.signIn.social({
    provider: "google",
  });
console.log(data, "data");
}

const handleLoginFunc = async (data) => {
console.log(data, "data");

const {data:res, error} = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",   
});

console.log(data, "data");
// };

console.log (res, error);

if (error) {
    alert(error.message)
}
 if (res) {
    alert("Signin Successful")
 } 
};

    return (
    <div className='bg-slate-200 container mx-auto '>
            
        <div className='bg-white rounded-xl w-120 container mx-auto p-20 my-10 flex gap-4 flex-col justify-center items-center'>
        <h2 className='font-bold'>  login Your Account </h2>
        <form onSubmit={handleSubmit(handleLoginFunc)}>
<fieldset className="fiedset">
  <legend className="fieldset-legend font-bold ">Email </legend>
  <input type="text"  className="input" placeholder="Enter Your Email Address" {...register("email")} />
</fieldset>

<fieldset className="fieldset  relative">
  <legend className="fieldset-legend font-black"> Password </legend>
  <input 
  type={isShowPassword ? "text":"password"} 
  className="input" 
  placeholder="Enter your Password" {...register("password", { required: "password is require" })}/>
 <span className='absolute right-2 top-4' onClick={() => setIsShowPassword(!isShowPassword)}>
    <FaRegEyeSlash />
    </span>
 {errors.password && <p> password is required </p>} 
</fieldset>

 
<br />
<button className='btn btn-primary w-full'><Link href = '/login'></Link> Log In</button>
<div className="divider text-sm text-gray-400">OR, Continue With</div>

<fieldset className="fiedset">
  <input type="text"  className="input font-bold text-black text-center text-lg" placeholder="Google" onClick={handleGoogleSignin} />
</fieldset>

<p className='text-sm'> Donot have an account</p>
<span className='text-sm text-green-600 font-bold'><Link href= "/register"> Register </Link></span>
                 </form>
                </div>  
      
        </div>  
    );
};

export default LoginPage;