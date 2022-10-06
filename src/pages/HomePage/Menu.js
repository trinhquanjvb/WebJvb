// file
import styles from './MainPage_RemainPage.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'

// library
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Person } from '@mui/icons-material';
import 'tippy.js/dist/tippy.css';
import axios from 'axios';
import {Link,} from "react-router-dom";
import { useSelector } from 'react-redux';


function Menu ()  {
    const cx= classNames.bind(styles)
    const [data, setData] = useState({})
    
    useEffect(() => {
        const urlPersonal= `https://bbs-stg.hatoq.com/api/v1/user`
        const newToken= localStorage.getItem('token')
        const token= JSON.parse(newToken)
        const fetchData= async() => {
            
            await axios.get(urlPersonal, {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                        'Authorization': 'Bearer ' + token
                }
            })
            .then(res => setData(res.data.data))
        }
        fetchData()
            .catch(res => res)
    }, [])

    // handleActive
    const [active, setActive] = useState(null)
    const menu= useSelector(store => store.reducerLogin.menu)
    const handleActive= (e) => {
        setActive(e.target.innerText)
    } 

    // render
    return (
        <div className={cx('menu')}>
            <div className={cx('menu__wrap')}>
                <ul 
                    className={cx('menu__list')}
                    onClick={handleActive}
                >
                    {menu.map((element, i) => (
                        <Link 
                            to={element.url}
                            key={++i}
                            className={element.value === active ? cx('active') : '' , {
                                active1: 'active1'
                            }}
                            >
                            {element.value}
                        </Link>
                    ))}
                </ul>
                <div className={cx('menu__personal')}>
                
                    <Person sx={{fontSize: 50, color: '#8f8787',cursor: 'pointer', borderRadius: '40%'}} />
                    { data.name && <div className={cx('menu__personal--name')}>{data.name}</div>}
                    <ArrowDropDownIcon className={cx('arrowDown')} fontSize="small" />
                    <NotificationsIcon className={cx('bell')} fontSize='large' />
                </div>
            </div>
        </div>
    )
}

export default Menu