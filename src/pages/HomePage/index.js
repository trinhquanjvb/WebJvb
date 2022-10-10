// file
import Sidebar from './Sidebar'
import Menu from './Menu'
import Modal from './Modal'

// library
import React from 'react'
import styles from './HomePage.module.scss'
import classNames from 'classnames/bind'
import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const HomePage = () => {
   const cx = classNames.bind(styles)
   const isShowModal = useSelector((store) => store.reducerHomePage.isShowModal)
   return (
      <nav className={cx('HomePage')}>
         <Sidebar />
         <div className={cx('HomePage__main')}>
            <Menu />
            {isShowModal && <Modal />}
            <Outlet />
         </div>
      </nav>
   )
}
export default HomePage
