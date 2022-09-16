// import file
import LoginLogout from "./LoginLogout";
import HomePage from "./HomePage";

// import library
import React from 'react'
import {Routes, Route} from "react-router-dom"

const Website = () => {
  return (
    <div>
        
        <Routes>
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/" element={<LoginLogout />} />
        </Routes>
    </div>

  )
}

export default Website