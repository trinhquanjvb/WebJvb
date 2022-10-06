// import file
import LoginLogout from '../pages/Login_Logout'
import HomePage from '../pages/HomePage'
import data from '../pages/HomePage/RemainPage'
import PasswordReset from '../pages/PasswordReset'

// import library
import React from 'react'
import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

const Router = () => {
   const navigate = useNavigate()

   useEffect(() => {
      const callback = () => {
         if (!localStorage.getItem('token')) {
            navigate('/login')
         }
      }
      callback()
   }, [])
   return (
      <Routes>
         <Route path="/login" element={<LoginLogout />} />
         <Route path="/" element={<HomePage />}>
            {data.map((element, i) => {
               const Component = element.component
               return (
                  <Route key={i} path={element.link} element={<Component />} />
               )
            })}
         </Route>
         <Route path="password/reset" element={<PasswordReset />} />
      </Routes>
   )
}

export default Router
