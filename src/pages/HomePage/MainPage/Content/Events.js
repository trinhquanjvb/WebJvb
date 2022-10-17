import React from 'react'
import styles from './Content.module.scss'
import classNames from 'classnames/bind'
import Divider from '@mui/material/Divider'

const Events = ({ element }) => {
   const cx = classNames.bind(styles)

   return (
      <div className={cx('events')}>
         <div className={cx('wrap_img')}>
            <img src={element.image} alt='khum biet' />
         </div>
         <div className={cx('event__info')}>
            <h3>{element.title}</h3>
            <p>
               Thời gian tổ chức: <span>{element.time}</span>
            </p>
            <p>
               Địa điểm tổ chức: <span>{element.location}</span>
            </p>

            <Divider sx={{ margin: '24px 0px' }} />

            <h4>{element.introduction}</h4>
            <button className={cx('btn')}>Xem chi tiết</button>
         </div>
      </div>
   )
}

export default Events
