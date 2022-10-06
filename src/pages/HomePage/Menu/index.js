// file
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'

// library
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { Person } from '@mui/icons-material'
import 'tippy.js/dist/tippy.css'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'

function Menu() {
   const cx = classNames.bind(styles)
   const [data, setData] = useState({})
   const location = useLocation()
   const url = location.pathname.split('/')[1]
   const urlPersonal = `https://bbs-stg.hatoq.com/api/v1/user`
   const newToken = localStorage.getItem('token')
   const token = JSON.parse(newToken)

   const menu = [
      { url: 'gio-lam-viec', value: 'Giờ làm việc' },
      { url: 'xin-phep', value: 'Xin phép' },
      { url: 'ngay-phep', value: 'Ngày phép' },
      { url: 'quy-jvb', value: 'Quỹ JVB' },
      { url: 'bao-cao-cong-viec', value: 'Báo cáo công việc' },
   ]
   useEffect(() => {
      const fetchData = async () => {
         await axios
            .get(urlPersonal, {
               headers: {
                  'Content-Type': 'application/json;charset=utf-8',
                  Authorization: 'Bearer ' + token,
               },
            })
            .then((res) => setData(res.data.data))
      }
      fetchData().catch((res) => res)
   }, [])

   // render
   return (
      <div className={cx('menu')}>
         <div className={cx('menu__wrap')}>
            <ul className={cx('menu__list')}>
               {menu?.map((element, i) => {
                  return (
                     <Link
                        to={element.url}
                        key={++i}
                        className={element.url === url ? cx('active') : ''}
                     >
                        {element.value}
                     </Link>
                  )
               })}
            </ul>
            <div className={cx('menu__personal')}>
               <Person
                  sx={{
                     fontSize: 50,
                     color: '#8f8787',
                     cursor: 'pointer',
                     borderRadius: '40%',
                  }}
               />
               {data.name && (
                  <div className={cx('menu__personal--name')}>{data.name}</div>
               )}
               <ArrowDropDownIcon
                  className={cx('arrowDown')}
                  fontSize="small"
               />
               <NotificationsIcon className={cx('bell')} fontSize="large" />
            </div>
         </div>
      </div>
   )
}

export default Menu
