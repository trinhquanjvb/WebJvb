import React from 'react'
import style from './Box.module.scss'
import classNames from 'classnames/bind'
import StickyNote2Icon from '@mui/icons-material/StickyNote2'

const Notice = () => {
   const cx = classNames.bind(styles)
   return (
      <div className={cx('box')}>
         <div className={cx('box__img')}>
            <img src='https://jvb-corp.com/img/logo.png' />
         </div>
         <div className={cx('box__main')}>
            <h3 className={cx('box__main--heading')}>heading</h3>
            <p className={cx('box__main--content')}>content</p>
            <div className={cx('box__main--title')}>
               <div className={cx('')}>icon</div>
               <div className={cx('')}>time</div>
            </div>
         </div>
      </div>
   )
}

export default Notice
