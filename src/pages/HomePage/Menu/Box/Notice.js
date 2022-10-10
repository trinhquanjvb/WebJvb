import styles from './Box.module.scss'
import dataMenu from '../data'

import React from 'react'
import classNames from 'classnames/bind'
import ListItemIcon from '@mui/material/ListItemIcon'

const Notice = () => {
   const cx = classNames.bind(styles)
   return (
      <div className={cx('box', 'box2')}>
         {dataMenu?.notice?.map((data, i) => (
            <div className={cx('notice')} key={i}>
               <div className={cx('box__img')}>
                  <img src={data.url} />
               </div>
               <div className={cx('box__main')}>
                  <h3 className={cx('box__main--heading')}>{data.heading}</h3>
                  <p className={cx('box__main--content')}>{data.content}</p>
                  <div className={cx('box__main--title')}>
                     <data.icon />
                     <div className={cx('')}>{data.time}</div>
                  </div>
               </div>
            </div>
         ))}
      </div>
   )
}

export default Notice
