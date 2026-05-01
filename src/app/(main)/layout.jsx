import React from 'react';
import Navbar from "@/components/shared/Navbar";
import Banner from "@/components/shared/Banner";
import Footer from "@/components/shared/Footer"

const MainLayout = ( {children}) => {
    return (
        <>
        <Navbar></Navbar>
      
         {children}
         <Footer></Footer>
        </>
    );
};

export default MainLayout;