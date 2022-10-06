// import file
import LoginLogout from "../pages/Login_Logout";
import HomePage from "../pages/HomePage";
import data from "../pages/HomePage/RemainPage";
import PasswordReset from "../pages/PasswordReset"

// import library
import React from 'react'
import {Routes, Route} from "react-router-dom"


const Router = () => {
  
  return (
        <Routes>
          <Route path="/" element={<LoginLogout />} />
          <Route path="/trang-chu" element={<HomePage />} >
            {data.map((element, i) => {
              const Component= element.component
              return (
                <Route
                  key={i}
                  path={element.link}
                  element={
                      <Component/>
                  }
                />
              )
            })}
          </Route>
          <Route path="Password/Reset" element={<PasswordReset />} />
        </Routes>
  )
}

export default Router