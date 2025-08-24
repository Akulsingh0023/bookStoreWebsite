import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';
import Loader from "react-js-loader";
// import { useState } from 'react';

function Logout() {
    const [authUser, setAuthUser] = useAuth()
    // const [loader , setLoader] =  useState(false)
    
    const handleLogout = () => {
        try {
            // setLoader(true)
            setAuthUser({
                ...authUser,
                user: null,
            });
            localStorage.removeItem("Users")
            toast.success("Logout successfully");
            setTimeout(() => {
                // setLoader(false)
                  window.location.reload();
            }, 3000);
        } catch (error) {
            toast.error("Error:" + error);
            setTimeout(() => {},2000)
        }
    }
    return (
        <>
        <div className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
            onClick={handleLogout}>
            {
             "Logout"
        }
        </div>
        
        </>
    )
}

export default Logout
/**
 * 
 *  return (
        <>
        <div className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
            onClick={handleLogout}>
            {
            loader? <Loader/> : "Logout"
        }
        </div>
        
        </>
    )
}
 */