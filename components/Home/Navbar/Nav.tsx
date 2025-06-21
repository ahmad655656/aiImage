'use client'
import { Navlink } from "@/constant/constant";
import React, { useEffect, useState } from "react";
import { MenuIcon, Search, ShoppingCart } from 'lucide-react'
import { Link as ScrollLink } from "react-scroll"
type Props = {
    openNav: () => void;
}
const Nav = ({openNav} : Props) => {

    const [navBg, setNavBg] = useState(false)

    useEffect(() => {
        const handler = () => {
        if (window.scrollY >= 60) {
            setNavBg(true)
        }
        else{
            setNavBg(false)
        }
        }
        window.addEventListener('scroll', handler)
        return () => {
            window.removeEventListener('scroll', handler)
            }
    }, [])
    const bg_style = navBg ? 'bg-gray-900 shadow-md' : ''
  return (
    <div className={`${bg_style} flex items-center justify-between h-[12vh] fixed z-[100] w-full mx-auto transition-all duration-200 `}>
      {/* Logo */}
      <h1 className="text-3xl text-white font-bold ml-8 md:ml-16 ">IMGIAI</h1>
      <div className="md:flex items-center space-x-10 hidden">
        {/* Nav Links */}
        {Navlink.map((link) => {
          return (
            <ScrollLink
            smooth
            spy
              to={link.url}
              key={link.id}
              className="relative cursor-pointer text-white text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center "
            >
              <p> {link.label}</p>
            </ScrollLink>
          );
        })}
      </div>
      {/* Buttons and icons */}
      <div className="flex items-center space-x-5 md:space-x-8 text-white mr-8 md:mr-16 ">
        <ShoppingCart className="cursor-pointer w-6 h-6 " />
        <Search className="cursor-pointer w-6 h-6 " />
        <MenuIcon onClick={openNav} className="cursor-pointer w-6 h-6 md:hidden " />
      </div>
    </div>
  );
};

export default Nav;
