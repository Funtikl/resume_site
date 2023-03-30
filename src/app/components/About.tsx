"use client";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import developer from '../../../public/developer.png'
import Link from "next/link";

function About() {
  const [me, setMe] = useState("Frontend developer");

  useEffect(() => {
    const interval = setInterval(() => {
      if (me === "Frontend developer") {
        setMe("Fuad Rustamzade");
      }
      if (me === "Fuad Rustamzade") {
        setMe("Frontend developer");
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [me]);

  return (
    <div className="flex flex-col sm:justify-around sm:flex-row">
      <div className="ml-16 mt-32 sm:mt-52">
        <h5 className="font-serif mb-2">Welcome to my porfolio website</h5>
        <h1 className="text-4xl font-serif">
          Hey Folks, I'm <span className="text-yellow-500">{me}</span>
        </h1>
        <p className="mt-5 font-serif sm:w-[600px]">
          Building a successful product is a challenge. I am highly energetic in
          user experience design, interfaces and web development.
        </p>
     
            <button className="font-serif mt-5 mx-2 bg-slate-200 p-4 border rounded-full transition-all duration-200 delay-100 hover:bg-slate-800 hover:text-white">
               <Link  href={'https://www.linkedin.com/in/fuadrustamzade/'} > My Linkedin</Link> 
            </button>
            <Link href={'/quotes'}  className="font-serif mt-5 mx-2 bg-slate-200 p-4 border rounded-full transition-all duration-200 delay-100 hover:bg-slate-800 hover:text-white">
                Get a free quote
            </Link>

      </div>
<Image src={developer} alt="developer" className="w-[600px] mt-[100px]" />
    </div>
  );
}

export default About;
