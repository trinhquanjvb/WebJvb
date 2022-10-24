import styles from './Setting.module.scss'
import Input from '../../../../../../components/Input'

import classNames from 'classnames/bind'
import Divider from '@mui/material/Divider'

function Setting() {
   const cx = classNames.bind(styles)
   return (
      <div className={cx('setting')}>
         <div className={cx('setting__option')}>
            <div className={cx('setting__option--heading')}>
               <div className={cx('heading__personal--title')}>
                  Hồ sơ cá nhân
               </div>
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
               <button className={cx('btn')}>sửa</button>
            </div>
         </div>
         <div className={cx('setting__record')}>
            <div className={cx('setting__record--fullName')}>
               <div className={cx('fullName__info')}>
                  <div className={cx('fullName__info--alias')}>
                     Trinh Minh Quân - TTS141
                  </div>
                  <Divider />
                  <div className={cx('fullName__info--list')}>
                     <div className={cx('list__item')}>
                        <span className={cx('label')}>Chức vụ:</span>
                        <span className={cx('label--info')}>
                           Lập trình viên
                        </span>
                     </div>
                     <div className={cx('list__item')}>
                        <span className={cx('label')}>Team:</span>
                        <span className={cx('label--info')}>Thực tập sinh</span>
                     </div>
                     <div className={cx('list__item')}>
                        <span className={cx('label')}>Ngày sinh:</span>
                        <span className={cx('label--info')}>1995-05-30</span>
                     </div>
                     <div className={cx('list__item')}>
                        <span className={cx('label')}>Giới tính:</span>
                        <span className={cx('label--info')}>Nam</span>
                     </div>
                     <div className={cx('list__item')}>
                        <span className={cx('label')}>Điện thoại:</span>
                        <span className={cx('label--info')}>0969775231</span>
                     </div>
                     <div className={cx('list__item')}>
                        <span className={cx('label')}>Email:</span>
                        <span className={cx('label--info')}>
                           trinhquan.jvb@gmail.com
                        </span>
                     </div>
                  </div>
               </div>
               <div className={cx('fullName__avata')}>
                  <i className='bx bxs-user-circle'></i>
               </div>
            </div>
            <div className={cx('address__title')}>Lý lịch</div>
            <div className={cx('setting__record--address')}>
               <div className={cx('address__list')}>
                  <div className={cx('address__list--item')}>Nguyên quán</div>
                  <Input />
               </div>
               <div className={cx('address__list')}>
                  <div className={cx('address__list--item')}>
                     Chỗ ở hiện tại
                  </div>
                  <Input
                     pencil='bx bxs-pencil'
                     important='bx bx-dots-horizontal-rounded'
                  />
               </div>
               <div className={cx('address__list')}>
                  <div className={cx('address__list--item')}>
                     Chứng minh nhân dân
                  </div>
                  <Input placeholder='036095007305' />
               </div>
               <div className={cx('address__list')}>
                  <div className={cx('address__list--item')}>Nơi cấp</div>
                  <Input placeholder='Cục CS QLHC về TTXH' />
               </div>
            </div>
            <div className={cx('address__title')}>
               Học vấn (Đại học, Cao Đẳng, ...)
            </div>
            <Input
               pencil='bx bxs-pencil'
               important='bx bx-dots-horizontal-rounded'
            />
            <div className={cx('address__title')}>Tài khoản</div>
            <div className={cx('setting__record--address')}>
               <div className={cx('address__list')}>
                  <div className={cx('address__list--item')}>Gmail</div>
                  <Input important='bx bx-dots-horizontal-rounded' />
               </div>
               <div className={cx('address__list')}>
                  <div className={cx('address__list--item')}>Gitlab</div>
                  <Input important='bx bx-dots-horizontal-rounded' />
               </div>
               <div className={cx('address__list')}>
                  <div className={cx('address__list--item')}>Chatwork</div>
                  <Input important='bx bx-dots-horizontal-rounded' />
               </div>
            </div>
            <div className={cx('address__title')}>Kỹ năng</div>
            <Input pencil='bx bxs-pencil' />
            <div className={cx('address__title')}>Mục tiêu tương lai</div>
            <Input pencil='bx bxs-pencil' />
            <div className={cx('address__title')}>Sở thích</div>
            <Input pencil='bx bxs-pencil' />
            <div className={cx('address__title')}>Ngoại ngữ</div>
            <Input pencil='bx bxs-pencil' />
         </div>
      </div>
   )
}

export default Setting
