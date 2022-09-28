// import file
import LoginLogout from "./LoginLogout";
import HomePage from "./HomePage";

// import library
import React from 'react'
import {Routes, Route} from "react-router-dom"

const Website = () => {
  return (
        <Routes >
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/" element={<LoginLogout />} />
        </Routes>

  )
}

export default Website