import { ArrowLeft, Search, User, ShoppingCart, Menu } from 'lucide-react';
import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, Links, NavLink } from "react-router-dom";
import Cart from "../Pages/Cart";
const Navbar = () => {
    const [visible,setVisible] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between  font-medium bg-[#F9F6EE] px-4 md:px-8 ">
        <Link to='/'>
          <img src={assets.logo} className="w-36" alt="" />
        </Link>
        <ul className=" sm:flex gap-5 text-sm text-[#1A1A1A] hidden">
          <NavLink to="/" className={"flex flex-col items-center gap-1 hover:text-[#800000]"}>
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-[#D4AF37] hidden"/>
          </NavLink>
          <NavLink to="/collection" className={"flex flex-col items-center gap-1 hover:text-[#800000]"}>
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-[#D4AF37] hidden" />
          </NavLink>
          <NavLink to="/about" className={"flex flex-col items-center gap-1 hover:text-[#800000]"}>
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-[#D4AF37] hidden" />
          </NavLink>
          <NavLink to="/contact" className={"flex flex-col items-center gap-1 hover:text-[#800000]"}>
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-[#D4AF37] hidden" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-6">
            <Search className="w-5 h-5 cursor-pointer text-[#800000] hover:text-amber-300" />       
            <div className="group relative">
              <User className="w-5 h-5 cursor-pointer text-[#800000] hover:text-amber-300" />
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-[#ffffff] text-[#1A1A1A] rounded shadow-lg border border-amber-200 ">
                  <p className="cursor-pointer hover:text-[#800000]">My Profile</p>
                  <p className="cursor-pointer hover:text-[#800000]">Orders</p>
                  <p className="cursor-pointer text-[#800000] hover:text-[#d4183d] font-medium">Logout</p> 
                </div>
              </div>
            </div>
            <Link to='/cart' className="relative">
              <ShoppingCart className="w-5 h-5 cursor-pointer text-[#800000] hover:text-amber-300" />
              <p className="absolute right-[-8px] bottom-[-8px] w-4 h-4 flex items-center justify-center leading-4 bg-[#800000] text-[#ffffff] font-bold aspect-square rounded-full text-[8px]" >10</p>
            </Link>
            {/* for smaller side menu screen when click */}
            <Menu onClick={()=>setVisible(true)} className="w-6 h-6 cursor-pointer text-[#800000] hover:text-amber-300 sm:hidden" />
        </div>

          {/* side menu for small screen  */}
          <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-[#F9F6EE] transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className="flex flex-col text-[#1A1A1A]">
              {/* when click on  back button  */} 
              <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 hover:text-[#800000] hover:bg-black/5 ">
                <ArrowLeft className="h-5 w-5" />
                <p className="font-semibold">Back</p>
              </div>
              <div className="border-t border-[#D4AF37] my-4"></div>
              {/* when click on any menu option  */}
              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 transition-all duration-150 hover:text-[#800000] hover:bg-black/5' to='/'>HOME</NavLink>
              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 transition-all duration-150 hover:text-[#800000] hover:bg-black/5' to='/collection'>COLLECTION</NavLink>
              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 transition-all duration-150 hover:text-[#800000] hover:bg-black/5' to='/about'>ABOUT</NavLink>
              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 transition-all duration-150 hover:text-[#800000] hover:bg-black/5' to='/contact'>CONTACT</NavLink>
            </div>
          </div>
      </div>
    </>
  );
};

export default Navbar;
