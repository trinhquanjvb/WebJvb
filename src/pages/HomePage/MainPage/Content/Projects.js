import { useEffect, useState } from 'react'
import styles from './Content.module.scss'
import classNames from 'classnames/bind'
import axios from 'axios'

function Projects() {
   const cx = classNames.bind(styles)

   const newToken = localStorage.getItem('token')
   const token = JSON.parse(newToken)
   const [data, setData] = useState([])
   const [newData, setNewData] = useState([])
   const url = `https://bbs-stg.hatoq.com/api/v1/projects`

   // get 10 fisrt projects
   useEffect(() => {
      if (data.length > 0) {
         setNewData(data.slice(0, 10))
      }
   }, [data.length])
   useEffect(() => {
      const fetchData = async () => {
         await axios
            .get(url, {
               headers: {
                  'Content-Type': 'application/json;charset=utf-8',
                  Authorization: 'Bearer ' + token,
               },
            })
            .then((res) => setData(res.data.data.projects))
      }
      fetchData().catch((res) => {
         return res
      })
   }, [])

   return (
      <div className={cx('row')}>
         <div className={cx('col-sm-12')}>
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
         </div>
      </div>
   )
}

export default Projects
