import styles from './RemainPage.module.scss'
import dataInfor from '../../../../container/dataInfor'

import React from 'react'
import classNames from 'classnames/bind'
import { useState } from 'react'

const DateOffWork = () => {
   const cx = classNames.bind(styles)
   // const currentDate = new Date().getDate()
   // const currentMonth = new Date().getMonth()
   // const currentYear = new Date().getFullYear()
   // console.log(currentDate, currentMonth, currentYear)

   // const [startDate, setStartDate] = useState()
   // const handleChangeDate = (e) => {
   //    setStartDate(e.target.value)
   // }
   return (
      <div className={cx('dateOffWork')}>
         {/*  */}
         <div className={cx('dateOffWork__heading')}>
            <div className={cx('dateOffWork__heading--icon')}>
               <i className='bx bxs-calendar-alt'></i>
               <div>Trịnh Minh Quân</div>
            </div>
            <div className={cx('dateOffWork__heading--color')}>
               <span>/ Giờ làm việc</span>
            </div>
         </div>
         {/*  */}
         <div className={cx('dateOffWork__date')}>
            <label className={cx('dateOffWork__date--label')}>Từ ngày</label>
            <input type='date' className={cx('dateOffWork__date--input')} />
            <label className={cx('dateOffWork__date--label')}>Đến ngày</label>
            <input type='date' className={cx('dateOffWork__date--input')} />
            <button className={cx('dateOffWork__date--btn')}>
               <i class='bx bx-search'></i>
            </button>
         </div>
         {/*  */}
         <div className={cx('dateOffWork__infor')}>
            {dataInfor.map((element, i) => (
               <div
                  className={cx('dateOffWork__infor--wrap', element.className)}
               >
                  <i
                     className={cx(
                        element.icon,
                        'dateOffWork__infor--calendar'
                     )}
                  ></i>
                  <div className={cx('dateOffWork__infor--content')}>
                     <div className={cx('content__heading')}>
                        {element.heading}
                     </div>
                     <div
                        className={cx('content__title', element?.transparent)}
                     >
                        {element.title}
                     </div>
                     <div className={cx('content__time')}>{element.time}</div>
                  </div>
               </div>
            ))}
         </div>
         {/*  */}
         <div className={cx('dateOffWork__select')}>
            <select>
               <option>Chờ duyệt</option>
               <option>Đã duyệt</option>
               <option>Chưa duyệt</option>
               <option>Tất cả đơn</option>
            </select>
         </div>
         {/*  */}
         <ul className={cx('dateOffWork__content')}>
            <li>STT</li>
            <li>Từ ngày</li>
            <li>Tới ngày</li>
            <li>Tiêu đề</li>
            <li>Nội dung</li>
            <li>Nghỉ có lương</li>
            <li>Phê duyệt </li>
            <li>Xem thêm</li>
         </ul>
      </div>
   )
}

export default DateOffWork
