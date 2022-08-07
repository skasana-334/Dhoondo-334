import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap border-b sm:justify-between justify-center items-center dark:border-blue-300 dark:border-b borde-gray-200'>
    <div className="flex  items-center justify-between space-x-5 w-screen ">
 <Link to='/'>
  <p className='bg-blue-100 text-2xl font-semibold dark:bg-gray-400 rounded-xl'>Dhoondo🔍</p></Link>
      <button type='button' onClick={()=>{props.ntheme(!props.theme)}} className='text-xl hover:shadow-lg rounded-full bg-blue-500 dark:bg-green-300 px-3 py-2'>
        {props.theme?'Light 💡':'Dark 🌙'}</button>
        </div>
    </div>
  )
}

export default Nav

