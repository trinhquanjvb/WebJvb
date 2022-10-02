// file
import RemainPage from './HomePage/RemainPage'
import Menu from './HomePage/Menu'

// library
import React from 'react'
import styles from './HomePage.module.scss'
import classNames from 'classnames/bind'
import {Outlet} from "react-router-dom";



const HomePage = ({children}) => {
  const cx= classNames.bind(styles)
  return (
    <nav className={cx('HomePage')}>
        <RemainPage />
        <div className={cx('HomePage__main')}>
          <Menu />
          <Outlet />
        </div>
    </nav>
  )
}
export default HomePage

