// // import file
// import LoginLogout from "./Login_Logout";
// import HomePage from "./HomePage";
// import data from "../pages/HomePage/RemainPage";
// import PasswordReset from "./PasswordReset"

// // import library
// import React from 'react'
// import {Routes, Route} from "react-router-dom"


// const Website = () => {
  
//   return (
//         <Routes>
//           <Route path="/" element={<LoginLogout />} />
//           <Route path="/trang-chu" element={<HomePage />} >
//             {data.map((element, i) => {
//               const Component= element.component
//               return (
//                 <Route
//                   key={i}
//                   path={element.link}
//                   element={
//                       <Component/>
//                   }
//                 />
//               )
//             })}
//           </Route>
//           <Route path="Password/Reset" element={<PasswordReset />} />
//         </Routes>
//   )
// }

// export default Website