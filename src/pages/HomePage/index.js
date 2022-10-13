// file
import Sidebar from './Sidebar'
import Menu from './Menu'
import Modal from './Modal'
import HomePageMobile from './HomePageMobile'

// library
import React from 'react'
import styles from './HomePage.module.scss'
import classNames from 'classnames/bind'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'

const HomePage = () => {
   const cx = classNames.bind(styles)
   const isShowModal = useSelector((store) => store.reducerHomePage.isShowModal)
   const isScreenMobile = useMediaQuery({ query: '(max-width: 668px)' })
   if (isScreenMobile) {
      return <HomePageMobile isScreenMobile={isScreenMobile} />
   } else {
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
   //    isScreenMobile ? return <HomePageMobile /> : return ((<nav className={cx('HomePage')}>
   //    <Sidebar />
   //    <div className={cx('HomePage__main')}>
   //       <Menu />
   //       {isShowModal && <Modal />}
   //       <Outlet />
   //    </div>
   // </nav>))

   // return (
   //    {isScreenMobile ? <HomePageMobile /> :(<nav className={cx('HomePage')}>
   //       <Sidebar />
   //       <div className={cx('HomePage__main')}>
   //          <Menu />
   //          {isShowModal && <Modal />}
   //          <Outlet />
   //       </div>
   //    </nav>)}
   // )
}
export default HomePage
