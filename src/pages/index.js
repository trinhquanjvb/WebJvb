// import file
import LoginLogout from "./LoginLogout";
import HomePage from "./HomePage";
import data from "../router/Homepage/route";

// import library
import React from 'react'
import {Routes, Route} from "react-router-dom"


const Website = () => {
  
  return (
        <Routes>
          <Route path="/" element={<LoginLogout />} />
          <Route path="HomePage" element={<HomePage />} >
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
        </Routes>
  )
}

export default Website