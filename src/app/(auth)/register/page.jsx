"use client"
import React from 'react';
import Link from "next/link";
import {useForm} from "react-hook-form";
import {authClient} from "@/lib/auth-client"

const RegisterPage = () => {
const { register, handleSubmit,formState: { errors }} = useForm();
   
    const handleRegisterFunc = async(data) => {
    console.log(data, "data");
    const {name, email, password, image} = data;
    

    const {data:res, error} = await authClient.signUp.email({
    name: name, // required
    email: email, // required
    image: "https://example.com/image.png",
    password: password, // required
    callbackURL: "/login",
  
});
console.log (res, error);

if (error) {
    alert(error.message)
}
 if (res) {
    alert("Signup Successful")
 }   
    };




    return (
        <div className='bg-slate-200  container mx-auto my-10'>
            
            <div className='bg-white rounded-xl w-150 container mx-auto p-10 my-6 flex gap-4 flex-col justify-center items-center'>
                <h2 className='font-bold'> Register Your Account </h2>
        <form onSubmit={handleSubmit(handleRegisterFunc)}>
                    <fieldset className="fieldset">
  <legend className="fieldset-legend">Name</legend>
  <input type="text" className="input" placeholder="Enter Your Name" {...register("name")} />

</fieldset>

 <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input type="text" className="input" placeholder="Enter Your Email" {...register("email")} />
</fieldset>

 <fieldset className="fieldset">
  <legend className="fieldset-legend">Photo URL</legend>
  <input type="text" className="input" placeholder="Photo url" {...register("image")} />
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend"> Password </legend>
  <input type="password" className="input" placeholder="Enter your Password" {...register("password", { required: "password is require" })} />
   {errors.password && <p> password is required </p>}
</fieldset>
<br />
<button className='btn btn-primary w-full'><Link href = '/login'></Link> Register</button>
<p className='text-sm'> Already have an account</p>
<span className='text-sm font-bold text-blue-700'><Link href= "/login"> sign in </Link></span>
                </form>

            </div>
           
        </div>
    );
};

export default RegisterPage;