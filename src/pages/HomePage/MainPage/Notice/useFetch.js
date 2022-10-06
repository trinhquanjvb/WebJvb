import { useEffect, useState } from 'react'

const useFetch = (id, token) => {
   const [data, setData] = useState({})
   const url = `https://bbs-stg.hatoq.com/api/v1/events/${id}`

   useEffect(() => {
      const fetchData = async () => {
         await fetch(url, {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json;charset=utf-8',
               Authorization: 'Bearer ' + token,
            },
         })
            .then((res) => res.json())
            .then((res) => {
               // const action= loading(true)
               // dispatch(action)
               return setData(res.data.event)
            })
      }

      fetchData()
         .catch('Api khong hop le')
         .finally(() => {
            // const action= loading(false)
            // dispatch(action)
         })
   }, [url])

   return data
}

export default useFetch
