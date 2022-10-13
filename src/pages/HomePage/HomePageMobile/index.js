import styles from './HomePageMobile.module.scss'
import dataMenu from '../Menu/data'
import Notice from '../MainPage/Notice'
import Content from '../MainPage/Content'

import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Divider } from '@mui/material'

function HomePageMobile({ isScreenMobile }) {
   const cx = classNames.bind(styles)
   const [isShowList, setIsShowList] = useState(false)
   const handleShowList = () => {
      setIsShowList(!isShowList)
   }
   return (
      <div>
         <div className={cx('menu')}>
            <div className={cx('menu__icon')}>
               <div>icon1</div>
               <div onClick={handleShowList}>icon2</div>
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
         <Notice isScreenMobile={isScreenMobile} />
         <Content />
      </div>
   )
}

export default HomePageMobile
