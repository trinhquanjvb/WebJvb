import styles from './ChangePassword.module.scss'
import Notice from '../../../../../components/Notice'

import { useState } from 'react'
import classNames from 'classnames/bind'

function ChangePassword() {
   const cx = classNames.bind(styles)
   const regexNewPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

   // binding value input
   const [valueCurr, setValueCurr] = useState('')
   const [valueNew, setValueNew] = useState('')
   const [valueConfirm, setValueConfirm] = useState('')
   // show or hide notice
   const [showCurr, setShowCurr] = useState(false)
   const [showNew, setShowNew] = useState(false)
   const [showConfirm, setShowConfirm] = useState(false)
   // custom notice
   const [customNotice, setCustomNotice] = useState(
      'vui lòng điền vào trường này'
   )

   const handleCurrPassword = (e) => {
      setValueCurr(e.target.value)
   }
   const handleNewPassword = (e) => {
      setValueNew(e.target.value)
   }
   const handleConfirmPassword = (e) => {
      setValueConfirm(e.target.value)
   }
   const handleUpdatePassword = (e) => {
      // check CurrPassword
      if (valueCurr === '') {
         setShowCurr(true)
         setShowNew(false)
         setShowConfirm(false)
      } else if (valueCurr !== '12345678') {
         setShowCurr(true)
         setCustomNotice('mật khẩu của bạn ko đúng')
         setShowNew(false)
         setShowConfirm(false)
      } else if (valueCurr === '12345678') {
         setShowCurr(false)
         setShowNew(false)
         setShowConfirm(false)

         // check new password
         if (valueNew === '') {
            setShowNew(true)
            setShowCurr(false)
            setShowConfirm(false)
         } else if (!regexNewPassword.test(valueNew)) {
            setShowCurr(false)
            setCustomNotice(
               'Password phải có độ dài tối thiểu 8 ký tự, và phải có ít nhất 1 chữ in hoa và ký tự đặc biệt'
            )
            setShowNew(true)
            setShowConfirm(false)
         } else if (regexNewPassword.test(valueNew)) {
            setShowCurr(false)
            setShowNew(false)
            setShowConfirm(false)

            // check confirm password
            if (valueConfirm === '') {
               setShowConfirm(true)
               setCustomNotice('vui lòng điền vào trường này')
               setShowCurr(false)
               setShowNew(false)
            } else if (valueConfirm !== valueNew) {
               setShowConfirm(true)
               setCustomNotice('Password của bạn không khớp')
               setShowCurr(false)
               setShowNew(false)
            } else if (valueConfirm === valueNew) {
               setShowConfirm(false)
               setShowCurr(false)
               setShowNew(false)
            }
         }
      }
   }
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
                        {showCurr && <Notice notice={customNotice} smallFont />}
                     </div>
                     <div className={cx('md-form', 'changePassword__form')}>
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
                        {showNew && <Notice notice={customNotice} smallFont />}
                     </div>
                     <div className={cx('md-form', 'changePassword__form')}>
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
                        {showConfirm && (
                           <Notice notice={customNotice} smallFont />
                        )}
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
