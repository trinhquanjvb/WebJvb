import styles from './Modal.module.scss'
import actionModal from '../../../redux/action/index'

import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames/bind'

function Modal() {
   const cx = classNames.bind(styles)
   const dispatch = useDispatch()
   const isShowModal = useSelector((store) => store.reducerHomePage.isShowModal)

   const handleModal = (e) => {
      const action = actionModal(!isShowModal)
      dispatch(action)
   }
   // render
   return (
      <div className={cx('modal')} onClick={handleModal}>
         <div className={cx('modal_container')}>
            <div className={cx('modal__heading')}>heading</div>
            <div className={cx('modal__radio')}>
               <div>
                  <input type='radio' />
                  <label>OT dự án</label>
               </div>
               <div>
                  <input type='radio' />
                  <label>OT cá nhân</label>
               </div>
            </div>
            <input className={cx('modal__select')} />
            <div className={cx('modal__time')}>
               <input type='time' />
               <input type='time' />
            </div>
            <input className={cx('modal__rate')} />
            <button className={cx('modal__btn')}>Gửi Đơn</button>
         </div>
      </div>
   )
}
export default Modal
