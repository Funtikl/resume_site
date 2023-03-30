"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { Document, Page } from '@react-pdf/renderer';

function Navbar() {
  const [active, setActive] = useState(false);
  const [margin, setMargin] = useState('mb-4')
  console.log(active);
  const visibilityOfHamburger = () => {
    if (active) {
      return "flex flex-col  sm:flex-row";
    } else {
      return "hidden";
    }
  };

  const navElements = [
    { name: "About", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Contacts", path: "/contacts" },
  ];

  const handleBurgerClick = () =>{
    if(!active){
      setActive(true)
      setMargin('mb-28')
    }
    else{
      setActive(false)
      setMargin('mb-4')
    }
  }
  return (
    <div className= {`flex flex-col ${margin} sm:flex-row sm:justify-between mt-4 sm:mb-5 sm:mx-52`}>


      <div className="flex justify-between mx-9">
        <div className="mt-2 flex gap-3">
          <CgProfile className="text-4xl" />
          <span className="mt-2 font-serif ">Fuad</span>{" "}
        </div>

        <button
          type="button"
          className="sm:hidden mt-3 "
          onClick={handleBurgerClick
          }
        >
          <FiMenu className="text-2xl transition ease-in-out delay-150 duration-300" />
        </button>
      </div>

      <nav className="flex justify-center">
        <ul
          className={`${visibilityOfHamburger()} sm:flex sm:gap-5 mt-3 sm:mr-96  absolute`}
        >
          {navElements.map((element, index) => {
            return (
              <Link
                href={element.path}
                key={index}
                className="text-xl font-serif cursor-pointer hover:text-yellow-500 "
              >
                {element.name}
                <span className="absolute -bottom-1 left-0 w-0 h-2 bg-blue-400 transition-all group-hover:w-full"></span>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
