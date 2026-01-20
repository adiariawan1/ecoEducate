import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import EachUtils from "../../../utils/EachUtils";
import { links } from "../../../data/navbar";
<<<<<<< HEAD
import Logo from "../../../assets/eco-logo-white.png";
=======
>>>>>>> main

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<<<<<<< HEAD
    <nav className="absolute top-0 left-0 right-0 w-full z-50 py-6 fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* logo */}
        <Link to={"/"} className="flex items-center gap-2 ">
          <div className="font-bold tracking-winder cursor-pointer text-white text-2xl">
            <img src={Logo} alt="eco-logo" className="w-50" />
=======
    <nav className="absolute top-0 left-0 right-0 w-full z-50 py-6 fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-2 ">
          <div className="font-bold tracking-winder cursor-pointer text-white text-2xl">
            <img
              src="eco-logo-white.png"
              alt="EcoEducate"
              width={155}
              height={140}
            />
>>>>>>> main
          </div>
        </Link>
        {/* navlinks */}
        <div className="hidden md:flex items-center gap-8">
          <EachUtils
            of={links}
            render={(item, index) => (
              <Link
                key={index}
                to={item.path}
<<<<<<< HEAD
                className="text-xs font-bold text-gray-300 hover:text-white transition tracking-widest">
=======
                className="text-xs font-bold text-gray-300 hover:text-orange-500 transform hover:scale-120 transition duration-400 tracking-widest">
>>>>>>> main
                {item.name}
              </Link>
            )}
          />
          {/* {links.map((item, index) => (
        <Link 
          key={index} 
          to={item.path} 
          className='text-xs font-bold text-gray-300 hover:text-white transition tracking-widest'
        >
          {item.name}
        </Link>
      ))} */}
        </div>
        {/* button */}
        <div className="hidden md:block">
          <Link to="/Kampanye">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-full font-bold text-xs tracking-widest transition transform hover:scale-105 shadow-xl shadow-orange-500/20">
              DONATE
            </button>
          </Link>
        </div>

        {/* MOBILE HAMBURGER  */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-5">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-white font-bold text-lg tracking-widest hover:text-emerald-400">
              {link.name}
            </Link>
          ))}
          <Link to="/Kampanye" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-orange-500 text-white py-4 rounded-full font-bold tracking-widest">
              DONATE NOW
            </button>
<<<<<<< HEAD
          </Link>
          =======
          <Link to="/Kampanye" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-orange-500 text-white py-4 rounded-full font-bold tracking-widest">
              DONATE NOW
            </button>
=======
>>>>>>> main
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
