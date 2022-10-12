import RenderWorkTime from './RenderWorkTime'
import styles from '.././RemainPage.module.scss'
import { data, options, days } from './dbDate'
import { useSelector, useDispatch } from 'react-redux'
import actionModal from '../../../../redux/action'

import { useState, useRef } from 'react'
import classNames from 'classnames/bind'

const WorkTime = () => {
   const cx = classNames.bind(styles)
   const [selected, setSelected] = useState(() => new Date().getMonth())
   const [index, setIndex] = useState(() => data[selected].month)
   const isShowModal = useSelector((store) => store.reducerHomePage.isShowModal)
   const dispatch = useDispatch()
   const handleMonth = (e) => {
      const month = e.target.value
      setIndex(data[month].month)
      setSelected(month)
   }

   function getDay() {
      const currentDay = new Date().getDay()
      return currentDay
   }

   const handleChange = (e) => {
      const action = actionModal(!isShowModal)
      dispatch(action)
   }

   return (
      <div className={cx('worktime')}>
         <div className={cx('worktime__heading')}>
            <div className={cx('worktime__heading--icon')}>
               <i className='bx bxs-calendar-alt'></i>
               <div>Trịnh Minh Quân</div>
            </div>
            <div className={cx('worktime__heading--color')}>
               <span>/ Giờ làm việc</span>
            </div>
         </div>
         <div className={cx('worktime__select')}>
            <select className={cx('worktime__select--year')}>
               <option>2022</option>
               <option>2021</option>
            </select>
            <select
               className={cx('worktime__select--month')}
               onChange={handleMonth}
            >
               {options.map((element, i) => (
                  <option
                     key={i}
                     value={element.value}
                     selected={element.value === selected}
                  >
                     {element.month}
                  </option>
               ))}
            </select>
         </div>
         <div className={cx('worktime__info')}>
            <span className={cx('worktime__info--warn')}>Số buổi đi muộn</span>
            <span className={cx('worktime__info--primary')}>Số buổi OT: 0</span>
            <span className={cx('worktime__info--success')}>
               Số buổi về sớm: 0
            </span>
         </div>
         <div className={cx('worktime__calender')}>
            <div className={cx('worktime__calender--day')}>
               {days.map((element, i) => (
                  <span key={i} className={cx('day')}>
                     {element.day}
                  </span>
               ))}
            </div>
            <div className={cx('worktime__calender--day', 'date')}>
               <RenderWorkTime
                  index={index}
                  onClick={handleChange}
                  selected={selected}
               />
            </div>
         </div>
      </div>
   )
}

export default WorkTime
