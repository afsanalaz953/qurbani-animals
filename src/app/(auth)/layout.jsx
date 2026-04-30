import React from 'react';
import Navbar from "@/components/shared/Navbar"

const AuthLayout = ( {children}) => {
    return (
        <div className='bg-slate-200 '>
          <Navbar></Navbar>  
           {children}
        </div>
    );
};

export default AuthLayout;