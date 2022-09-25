// file
import styles from './MainPage.module.scss'
import classNames from 'classnames/bind'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

// library
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Person } from '@mui/icons-material';
import 'tippy.js/dist/tippy.css';
import axios from 'axios';


 function Menu ()  {
  const cx= classNames.bind(styles)
  const [data, setData] = useState({})
  const newToken= localStorage.getItem('token')
  const token= JSON.parse(newToken)

  const urlPersonal= `https://bbs-stg.hatoq.com/api/v1/user`
    useEffect( () => {

        axios.get(urlPersonal, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': 'Bearer ' + token
            }
        })
        .then(res => setData(res.data.data))
    }, [])


  
    return (
        <div className={cx('menu')}>
            <ul className={cx('menu__list')}>
                    <li>Giờ làm việc</li>
                    <li>Xin phép</li>
                    <li>Ngày phép </li>
                    <li>Quỹ JVB</li>
                    <li>Báo cáo công việc</li>                    
            </ul>

            <div className={cx('menu__personal')}>
                
                <Person sx={{fontSize: 50, color: '#8f8787',cursor: 'pointer'}} />
                { data.name && <div className={cx('menu__personal--name')}>{data.name}</div>}
                <ArrowDropDownIcon className={cx('arrowDown')} fontSize="small" />
                <NotificationsIcon className={cx('bell')} fontSize='large' />
            </div>
        </div>
    )
}

export default Menu