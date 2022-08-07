import React from 'react'
import { useState } from 'react'
import { useDataContext } from '../FetchApi/Api';
import { useDebounce } from 'use-debounce';
//A Debouncing Events in ReactJS will allow you to call a function that ensures that a time-consuming task does not fire so often. It’s a function that takes a function as a parameter and wraps that function in a closure and returns it so this new function displays the “wait for a bit” behavior.
import Links from './Links'
import { useEffect } from 'react';

const Search = () => {
  const[text,ntext]=useState('Virat Kohli');
  const {nsrch}=useDataContext();
  const [dvalue] = useDebounce(text, 300);
  useEffect(()=>{
    if(dvalue)
    nsrch(dvalue)
  },[dvalue])
  return (
    <>
    <div className='flex items-center justify-center'>
      <input type='text' placeholder='Search' value={text} className='rounded-full px-2 py-2 w-64 mt-2 outline-none hover:shadow-xl dark:bg-gray-500 dark:text-black' onChange={(ip)=>ntext(ip.target.value)} />
      <div className='px-2 mt-3 dark:text-white rounded-lg'>
     {(text)&&(
      <button type="button" onClick={()=>{ntext('')}}>✕</button>)
  
     } 
         </div>
      </div>

      <Links />
 
    </>
  )
}

export default Search
