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
                return  setData(res.data.event)
            })
            .catch('Api khong hop le')
            .finally('ket thuc')
        }

        fetchData()
    }, [url])

     return data
}

export default useFetch