import React from 'react'
import {  Navigate, Route, Routes } from 'react-router-dom'
import Result from './Result'
const Rootes = () => {
  return (
    <div>
      <div className="p-4">
      <Routes>
        <Route path='/' element={<Navigate to='/search' replace/>}></Route>
        {["/search", "/image","news","video"].map(path => (
    <Route 
      key="Result" // optional: avoid full re-renders on route changes
      path={path}
      element={<Result/>}
    />
  ))}
      </Routes>  
      </div>
    </div>
  )
}

export default Rootes
