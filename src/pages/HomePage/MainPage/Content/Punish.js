import classNames from 'classnames/bind'
import styles from './Content.module.scss'
import { useState, useLayoutEffect, useRef } from 'react'

function Punish() {
   const cx = classNames.bind(styles)
   const [money, setMoney] = useState(0)
   const timeId = useRef()

   useLayoutEffect(() => {
      timeId.current = setInterval(() => {
         setMoney((prev) => {
            return (prev += 23456)
         })
      }, 50)
   }, [])

   useLayoutEffect(() => {
      if (money > 2015000) {
         clearInterval(timeId.current)
         setMoney(2015000)
      }
   }, [money])

   return (
      <div className={cx('row')}>
         <div className={cx('col-sm-12')}>
            <div className={cx('punish')}>
               <div className={cx('punish__img')}>
                  <img
                     src='https://bbs.hatoq.com/img/pigs/pig-1.png'
                     alt='khum biet'
                  />
               </div>
               <div className={cx('punish__info')}>
                  <h2>Tiền phạt công ty tháng 09</h2>
                  <h1>{money.toLocaleString('en-US')}</h1>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Punish
