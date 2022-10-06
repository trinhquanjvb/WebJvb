// import { loading } from "../../redux/action"

// import { useEffect, useState } from "react"
// import {useSelector, useDispatch} from 'react-redux'


// const useFetch=  (id, token) => {
//     const dispatch= useDispatch()
//     const [data, setData] = useState({})
//     // const isLoading= useSelector(store => store.reducerLogin.isLoading)
    
//     const url= `https://bbs-stg.hatoq.com/api/v1/events/${id}`

//     useEffect(() => {
//         const fetchData= async () => {
//             await fetch(url, {
//                 method: 'GET',
//                 headers:{
//                     'Content-Type': 'application/json;charset=utf-8',
//                     'Authorization': 'Bearer ' + token
//                 }
//             })
//             .then(res => res.json())
//             .then(res => {
//                 // const action= loading(true)
//                 // dispatch(action)
//                 return  setData(res.data.event)
//             })
//         }

//         fetchData()
//             .catch('Api khong hop le')
//                 .finally(() => {
//                     // const action= loading(false)
//                     // dispatch(action)
//                 })
//     }, [url])

//      return data
// }

// export default useFetch