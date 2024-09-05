import React from 'react'
import { useState } from 'react';
import { IoIosNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SIHLOGO from "../../assets/SIHLogo.png";
export const NavBar = () => {
    const navigate = useNavigate();
  return (
    <div>
        <nav className='bg-blue-400 text-white p-4 flex flex-row justify-between items-center'>
            <div onClick={()=>navigate("/")} className=' flex flex-row items-center cursor-pointer'>
            <img src={SIHLOGO} className='aspect-square h-[70px]' alt='SIH'/>
            <div>Rakshak</div>
            </div>
            <div>
                <ul className='flex flex-row'>
                    <Link to={"/dashboard"} className='mx-2 hover:text-black transition-all duration-100'>Dashboard</Link>
                    <Link to={"/profile"} className='mx-2 hover:text-black transition-all duration-100'>Profile</Link>
                    <Link to={"/activity-view"} className='mx-2 hover:text-black transition-all duration-100'>Activity View</Link>
                </ul>
            </div>
            <div className='flex items-center gap-x-3'>
                <button onClick={()=>navigate("/login")} className=' bg-white bg-opacity-30 border-2 border-gray-200 backdrop-blur-sm py-2 px-4 rounded-md hover:bg-yellow-200 hover:text-black hover:border-black'>Login</button>
                <button onClick={()=>navigate("/signup")} className='bg-white bg-opacity-30 border-2 border-gray-200 backdrop-blur-sm py-2 px-4 rounded-md hover:bg-yellow-200 hover:text-black hover:border-black'>Signup</button>
                   <IoIosNotifications onClick={() => navigate("/notifications")} className='text-3xl mx-2 cursor-pointer'/>
            </div>
        </nav>
    </div>
  )
}
