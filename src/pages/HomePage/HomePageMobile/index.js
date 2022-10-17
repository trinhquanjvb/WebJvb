import styles from './HomePageMobile.module.scss'
import dataMenu from '../Menu/data'
import Notice from '../MainPage/Notice'
import Content from '../MainPage/Content'
import Sidebar from '../../HomePage/Sidebar'
import { Divider } from '@mui/material'

import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function HomePageMobile({ isScreenMobile }) {
   const cx = classNames.bind(styles)
   const [isShowList, setIsShowList] = useState(false)
   const [isShowSidebar, setIsShowSidebar] = useState(false)
   const handleShowList = () => {
      setIsShowList(!isShowList)
   }
   const handleShowSidebar = () => {
      setIsShowSidebar(!isShowSidebar)
   }
   const handleModal = () => {
      setIsShowSidebar(false)
   }
   const stopPropagationSidebar = (e) => {
      e.stopPropagation()
   }
   return (
      <div className={cx('homePageMobile')}>
         <div className={cx('menu')}>
            <div className={cx('menu__icon')}>
               <div onClick={handleShowSidebar}>
                  <i className='bx bx-menu'></i>
               </div>
               <div onClick={handleShowList}>
                  <i className='bx bxs-user-badge'></i>
               </div>
               {isShowList && <Divider className={cx('menu__divider')} />}
            </div>
            {isShowList && (
               <ul className={cx('menu__list')}>
                  {dataMenu.menuMobile.map((element, i) => {
                     return (
                        <Link to={element.url} key={++i}>
                           {element.value}
                        </Link>
                     )
                  })}
               </ul>
            )}
         </div>
         {isShowSidebar && (
            <div className={cx('modal')} onClick={handleModal}>
               <Sidebar onClick={stopPropagationSidebar} />
            </div>
         )}
         <Notice isScreenMobile={isScreenMobile} />
         <Content />
      </div>
   )
}

export default HomePageMobile
