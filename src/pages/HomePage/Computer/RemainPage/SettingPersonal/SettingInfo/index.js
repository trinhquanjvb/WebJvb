import Input from '../../../../../../components/Input'
import styles from './SettingInfo.module.scss'

import classNames from 'classnames/bind'
import Divider from '@mui/material/Divider'
import { useSelector } from 'react-redux'

function SettingInfo() {
   const cx = classNames.bind(styles)
   const isShowIcon = useSelector((store) => store.reducerHomePage.isShowIcon)
   return (
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
                     <span className={cx('label--info')}>Lập trình viên</span>
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
               <div className={cx('fullName__avata--img')}>
                  <i className='bx bxs-user-circle'></i>
               </div>
               <div className={cx('fullName__avata--btn')}>
                  {isShowIcon && (
                     <button className={cx('btn', 'rounded', 'grey', 'mr')}>
                        Đổi ảnh
                     </button>
                  )}
               </div>
            </div>
         </div>
         <div className={cx('setting__record--title')}>Lý lịch</div>
         <div className={cx('setting__record--address')}>
            <div className={cx('address__list')}>
               <div className={cx('address__list--item')}>Nguyên quán</div>
               <Input />
            </div>
            <div className={cx('address__list')}>
               <div className={cx('address__list--item')}>Chỗ ở hiện tại</div>
               <Input
                  title='vui lòng điền vào trường này'
                  pencil='bx bxs-pencil'
                  important='bx bx-dots-horizontal-rounded'
                  Tag={isShowIcon ? 'input' : 'div'}
               />
            </div>
            <div className={cx('address__list')}>
               <div className={cx('address__list--item')}>
                  Chứng minh nhân dân
               </div>
               <Input
                  placeholder='036095007305'
                  Tag={isShowIcon ? 'input' : 'div'}
                  readonly
               />
            </div>
            <div className={cx('address__list')}>
               <div className={cx('address__list--item')}>Nơi cấp</div>
               <Input
                  placeholder='Cục CS QLHC về TTXH'
                  Tag={isShowIcon ? 'input' : 'div'}
                  readonly
               />
            </div>
         </div>
         <div className={cx('setting__record--title')}>
            Học vấn (Đại học, Cao Đẳng, ...)
         </div>
         <Input
            title='vui lòng điền vào trường này'
            pencil='bx bxs-pencil'
            important='bx bx-dots-horizontal-rounded'
            Tag={isShowIcon ? 'input' : 'div'}
         />
         <div className={cx('setting__record--title')}>Tài khoản</div>
         <div className={cx('setting__record--address')}>
            <div className={cx('address__list')}>
               <div className={cx('address__list--item')}>Gmail</div>
               <Input Tag={isShowIcon ? 'input' : 'div'} />
            </div>
            <div className={cx('address__list')}>
               <div className={cx('address__list--item')}>Gitlab</div>
               <Input Tag={isShowIcon ? 'input' : 'div'} />
            </div>
            <div className={cx('address__list')}>
               <div className={cx('address__list--item')}>Chatwork</div>
               <Input Tag={isShowIcon ? 'input' : 'div'} />
            </div>
         </div>
         <div className={cx('setting__record--title')}>Kỹ năng</div>
         <Input pencil='bx bxs-pencil' Tag={isShowIcon ? 'input' : 'div'} />
         <div className={cx('setting__record--title')}>Mục tiêu tương lai</div>
         <Input pencil='bx bxs-pencil' Tag={isShowIcon ? 'input' : 'div'} />
         <div className={cx('setting__record--title')}>Sở thích</div>
         <Input pencil='bx bxs-pencil' Tag={isShowIcon ? 'input' : 'div'} />
         <div className={cx('setting__record--title')}>Ngoại ngữ</div>
         <Input pencil='bx bxs-pencil' Tag={isShowIcon ? 'input' : 'div'} />
         <div className={cx('setting__record--note')}>
            ghi chú: <i className='bx bx-dots-horizontal-rounded'></i> là trường
            bắt buộc
         </div>
      </div>
   )
}

export default SettingInfo
