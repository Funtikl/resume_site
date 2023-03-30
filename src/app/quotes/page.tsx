'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


function Quotes() {
const [data, setData] = useState(null)

async function updateQuote() {
    try{
        const response = await fetch("https://api.quotable.io/random")
        const {statusCode, statusMessage, ...data} = await response.json()
        if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
        setData(data);
    }catch(error){
        console.error(error);
        setData({ content: "Opps... Something went wrong" });
    }
}
useEffect(() => {
    updateQuote();
  }, []);

  return (
    
<div className="font-serif max-w-sm mt-16 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-yellow-500">
   <p className='text-black'>{data?.content}</p>
    <p className="font-serif mb-3 font-normal text-gray-700 dark:text-gray-400">-{data?.author}</p>
    <button onClick={updateQuote} className="font-serif inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-grey-700 rounded-lg hover:bg-grey-800 focus:ring-4 focus:outline-none focus:ring-yellow-500 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-yellow-500">
        Next quote
        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    <Link href={'/'} className="font-serif ml-36 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-yellow-500">
        Home
    </Link>
</div>

  )
}

export default Quotes