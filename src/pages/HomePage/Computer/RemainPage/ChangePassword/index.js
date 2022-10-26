import styles from './ChangePassword.module.scss'

import { useState } from 'react'
import classNames from 'classnames/bind'

function ChangePassword() {
   const cx = classNames.bind(styles)
   const [valueCurr, setValueCurr] = useState('')
   const [valueNew, setValueNew] = useState('')
   const [valueConfirm, setValueConfirm] = useState('')
   const handleCurrPassword = (e) => {
      setValueCurr(e.target.value)
   }
   const handleNewPassword = (e) => {
      setValueNew(e.target.value)
   }
   const handleConfirmPassword = (e) => {
      setValueConfirm(e.target.value)
   }
   const handleUpdatePassword = (e) => {}
   const handleCanclePassword = (e) => {}

   return (
      <div className={cx('changePassword')}>
         <div className={cx('changePassword__heading')}>
            <div className={cx('changePassword__heading--icon')}>
               <i className='bx bxs-calendar-alt'></i>
               <div>Trịnh Minh Quân</div>
            </div>
            <div className={cx('changePassword__heading--color')}>
               <span>/ Giờ làm việc</span>
            </div>
         </div>

         {/* boostrap */}
         <div className={cx('row mt-lg-5')}>
            <div className={cx('col-lg-4')}></div>
            <div className={cx('col-lg-4')}>
               <div className={cx('card')}>
                  <div className={cx('card-header py-3')}>Đổi mật khẩu</div>
                  <div className={cx('card-body')}>
                     <div className={cx('md-form', 'changePassword__form')}>
                        <input
                           type='password'
                           placeholder='mật khẩu hiện tại'
                           className={cx(
                              'form-control',
                              'changePassword__input'
                           )}
                           onChange={handleCurrPassword}
                           value={valueCurr}
                        />
                        <input
                           type='password'
                           placeholder='mật khẩu mới'
                           className={cx(
                              'form-control',
                              'changePassword__input'
                           )}
                           onChange={handleNewPassword}
                           value={valueNew}
                        />
                        <input
                           type='password'
                           placeholder='xác nhận mật khẩu'
                           className={cx(
                              'form-control',
                              'changePassword__input'
                           )}
                           onChange={handleConfirmPassword}
                           value={valueConfirm}
                        />
                     </div>
                  </div>
                  <div className={cx('card-footer changePassword__footer')}>
                     <button
                        onClick={handleUpdatePassword}
                        className={cx('btn ')}
                     >
                        CẬP NHẬT
                     </button>
                     <button
                        onClick={handleCanclePassword}
                        className={cx('btn blue my-3')}
                     >
                        HỦY BỎ
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ChangePassword
