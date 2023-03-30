'use client';
import Link from 'next/link';
import React from 'react'
import { AiFillFacebook, AiFillTwitterSquare, AiFillPhone, AiFillLinkedin } from "react-icons/ai";

function Contacts() {

  return (
    
<div className="flex flex-col gap-1 font-serif max-w-sm mt-16 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-yellow-500">
  
   <Link href={'https://www.facebook.com/fuad.rustamzade/'} className="p-1 hover:text-yellow-500 font-serif text-xl flex gap-1">
   <AiFillFacebook className='mt-1 text-2xl' />   Facebook 
    </Link>
    <hr />
    <Link href={'https://twitter.com/FuadRustam'} className="p-1 hover:text-yellow-500 font-serif text-xl flex gap-1">
   <AiFillTwitterSquare className='mt-1 text-2xl' />   Twitter 
    </Link>
<hr />
<Link href={'https://www.linkedin.com/in/fuadrustamzade/'} className="p-1 hover:text-yellow-500 font-serif text-xl flex gap-1">
   <AiFillLinkedin className='mt-1 text-2xl' />   LinkedIn 
    </Link>
<hr />
<p className='p-1 hover:text-yellow-500 flex gap-1 text-black text-xl font-serif'><AiFillPhone className='text-2xl' />Tel:+994552597739</p>
<hr />

    <Link href={'/'} className="p-1 w-20 font-serif ml-32 mt-4 inline-flex items-center pl-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-yellow-500">
        Home
    </Link>
</div>

  )
}

export default Contacts