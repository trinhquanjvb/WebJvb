import styles from './RemainPage.module.scss'

import React from 'react'
import classNames from 'classnames/bind'
import { useState } from 'react'

const PleaseOffWork = () => {
   const cx = classNames.bind(styles)
   const [active, setActive] = useState(true)
   const handleActive = () => {
      setActive(!active)
   }
   return (
      <div className={cx('pleaseOffWork')}>
         {/*  */}
         <div className={cx('pleaseOffWork__heading')}>
            <div className={cx('pleaseOffWork__heading--icon')}>
               <i className='bx bxs-calendar-alt'></i>
               <div>Trịnh Minh Quân</div>
            </div>
            <div className={cx('pleaseOffWork__heading--color')}>
               <span>/ Giờ làm việc</span>
            </div>
         </div>
         {/*  */}
         <div className={cx('pleaseOffWork__content')}>
            <div className={cx('pleaseOffWork__content--title')}>
               Xin phép cá nhân
            </div>
            <div className={cx('pleaseOffWork__content--cause')}>
               <div className={cx('pleaseOffWork__content__rest')}>
                  Xin phép nghỉ
               </div>
               <div className={cx('pleaseOffWork__content__over')}>Xin OT</div>
               <div className={cx('pleaseOffWork__content__soon')}>
                  Xin về sớm
               </div>
               <div className={cx('pleaseOffWork__content__late')}>
                  Xin đi muộn
               </div>
            </div>
         </div>
         {/*  */}
         <div className={cx('pleaseOffWork__option')}>
            <div
               className={cx(
                  'pleaseOffWork__option--time',
                  active ? 'active' : null
               )}
               onClick={handleActive}
            >
               Xin đi muộn/ sớm
            </div>
            <div
               className={cx(
                  'pleaseOffWork__option--over',
                  active ? null : 'active'
               )}
               onClick={handleActive}
            >
               Xin OT
            </div>
         </div>
         {/*  */}
         <div className={cx('pleaseOffWork__search')}>
            <label htmlFor='pleaseOffWork__search--label'>Tìm kiếm</label>
            <input id='pleaseOffWork__search--input' />
         </div>
         {/*  */}
         <ul className={cx('pleaseOffWork__list')}>
            <li className={cx('pleaseOffWork__list--item')}>Ngày</li>
            <li className={cx('pleaseOffWork__list--item')}>Hình thức</li>
            <li className={cx('pleaseOffWork__list--item')}>Thời gian</li>
            <li className={cx('pleaseOffWork__list--item')}>Nội dung</li>
            <li className={cx('pleaseOffWork__list--item')}>
               Nội dung từ chối
            </li>
            <li className={cx('pleaseOffWork__list--item')}>Trạng thái</li>
         </ul>
         {/*  */}
         <div className={cx('pleaseOffWork__data')}>Không tìm thấy dữ liệu</div>
         <div className={cx('pleaseOffWork__none')}>Dữ liệu trống</div>
      </div>
   )
}

export default PleaseOffWork
