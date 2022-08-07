import React from 'react'
import Nav from './Components/Nav'
import Rootes from './Components/Rootes'
import { useState } from 'react'
import Search from './Components/Search'

const App = () => {
  const [dtheme,ntheme]=useState(false);
  return (
    
    <div className={dtheme ? 'dark':''}>
      <div className="bg-gray-400 dark:bg-slate-700  min-h-screen">
    <Nav theme={dtheme} ntheme={ntheme}/>
    <Search/>
    <Rootes/>
    </div>
    </div>
  )
}

export default App
