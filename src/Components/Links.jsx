import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {
    const links=[
        {url:'/search' ,text:'🔍 All'},
        {url:'/image' ,text:'📷images'},
        {url:'/video' ,text:'📹videos'},
        {url:'/news' ,text:'📰news'},
    ]
  return (
    <div className='flex sm:justify-around justify-between items-center mt-4 border-b-2  border-slate-300' >
  {links.map(({url,text})=>(
    <NavLink to={url} className={(navData) => navData.isActive?'border-b-2 border-green-700 text-blue-700 dark:text-white  pb-2':'hover:text-white'}>{text}</NavLink>
  ))}
    </div>
  )
}

export default Links
