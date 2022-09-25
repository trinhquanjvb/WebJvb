import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styles from './Content.module.scss'
import classNames from 'classnames/bind'
import axios from "axios"


function Projects() {
    const cx= classNames.bind(styles)

    const newToken= localStorage.getItem('token')
    const token= JSON.parse(newToken)
    const [data, setData]= useState([])
    const [newData, setNewData]= useState([])

    // get 10 fisrt projects
    useEffect(() => {

        if(data.length > 0) {
            setNewData(data.slice(0, 10))
           
        }
    }, [data.length])
    
    const url= `https://bbs-stg.hatoq.com/api/v1/projects`
    axios.get(url, {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
                'Authorization': 'Bearer ' + token
        }
    })
    .then(res => setData(res.data.data.projects))
    .catch('Api ko hoat dong')

    return (
        <div className={cx('projects')}>
            <h1>DỰ ÁN MỚI</h1>
            <ul className={cx('project__list')}>
                {newData.map((element, i) => (
                    <li key={i}>
                        <h2>{element.customer}</h2>
                        <h5>{element.name}</h5>
                        <p>{element.creator}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Projects