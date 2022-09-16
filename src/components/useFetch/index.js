import { useEffect, useState } from "react"

const useFetch= (id, token) => {
    const [data, setData] = useState({})
    
    const url= `https://bbs-stg.hatoq.com/api/v1/events/${id}`
    useEffect(() => {
        const fetchData= () => {fetch(url, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res.data.event)
                return  setData(res.data.event)
            })}

        fetchData()
    }, [url])

     return data
}

export default useFetch