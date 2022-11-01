import styles from './SettingHeading.module.scss'
import { actionIcon } from '../../../../../../redux/action'
import Btn from '../Setting/Btn'

import classNames from 'classnames/bind'
import { useSelector, useDispatch } from 'react-redux'

function SettingHeading({ transparent }) {
   const cx = classNames.bind(styles)
   const dispatch = useDispatch()
   const isShowIcon = useSelector((store) => store.reducerHomePage.isShowIcon)
   const handleShow = () => {
      const action = actionIcon(!isShowIcon)
      dispatch(action)
   }
   const handlHideIcon = () => {
      const action = actionIcon(false)
      dispatch(action)
   }
   return (
      <div className={cx('setting__option')}>
         <div className={cx('setting__option--heading', transparent)}>
            <div className={cx('heading__personal--title')}>Hồ sơ cá nhân</div>
            <div className={cx('heading__personal--color')}>
               <span>Chọn màu nền</span>
               <span>Nền</span>
            </div>
            <div className={cx('heading__personal--color')}>
               <span>Chọn màu chữ</span>
               <span>Chữ</span>
            </div>
         </div>
         <div className={cx('setting__option--btn')}>
            {isShowIcon ? (
               <Btn onClick={handlHideIcon} />
            ) : (
               <button className={cx('btn')} onClick={handleShow}>
                  sửa
               </button>
            )}
         </div>
      </div>
   )
}

export default SettingHeading
