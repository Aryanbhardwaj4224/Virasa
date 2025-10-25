import { ArrowLeft, Search, User, ShoppingCart, Menu } from 'lucide-react';
import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import Cart from "../Pages/Cart";
const Navbar = () => {
    const [visible,setVisible] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between py-5 font-medium">
        <img src={assets.logo} className="w-36" alt="" />

        <ul className=" sm:flex gap-5 text-sm text-shadow-gray-700 hidden">
          <NavLink to="/" className={"flex flex-col items-center gap-1 "}>
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
          </NavLink>
          <NavLink to="/collection" className={"flex flex-col items-center gap-1 "}>
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/about" className={"flex flex-col items-center gap-1 "}>
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact" className={"flex flex-col items-center gap-1 "}>
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-6">
            <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />       
            <div className="group relative">
              <img src={assets.profile_icon} className="w-5 cursor-pointer " alt="" />
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-amber-50 text-stone-700 rounded ">
                  <p className="cursor-pointer hover:text-amber-600">My Profile</p>
                  <p className="cursor-pointer hover:text-amber-600">Orders</p>
                  <p className="cursor-pointer hover:text-red-600 font-medium">Logout</p> 
                </div>
              </div>
            </div>
            <Link to='/cart' className="relative">
              <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
            </Link>
            {/* for smaller side menu screen when click */}
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt="" />
        </div>

          {/* side menu for small screen  */}
          <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-red-800 transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className="flex flex-col text-amber-400">
              {/* when click on  back button  */}
              <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3">
                <ArrowLeft className="h-5 w-5" />
                <p className="font-semibold">Back</p>
              </div>
              <div className="border-t border-amber-400/20 my-4"></div>
              {/* when click on any menu option  */}
              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 transition-all duration-150 hover:bg-red-700' to='/'>HOME</NavLink>
              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 transition-all duration-150 hover:bg-red-700' to='/collection'>COLLECTION</NavLink>
              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 transition-all duration-150 hover:bg-red-700' to='/about'>ABOUT</NavLink>
              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 transition-all duration-150 hover:bg-red-700' to='/contact'>CONTACT</NavLink>
            </div>
          </div>
      </div>
    </>
  );
};

export default Navbar;
