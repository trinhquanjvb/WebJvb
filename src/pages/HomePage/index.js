// file
import Sidebar from './Sidebar'
import Menu from './Menu'

// library
import React from 'react'
import styles from './HomePage.module.scss'
import classNames from 'classnames/bind'
import {Outlet} from "react-router-dom";



const HomePage = () => {
  const cx= classNames.bind(styles)
  return (
    <nav className={cx('HomePage')}>
        <Sidebar />
        <div className={cx('HomePage__main')}>
          <Menu />
          <Outlet />
        </div>
    </nav>
  )
}
export default HomePage

