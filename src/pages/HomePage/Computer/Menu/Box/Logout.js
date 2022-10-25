import styles from './Box.module.scss'

import React from 'react'
import { Divider } from '@mui/material'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const Logout = ({ onClick }) => {
   const cx = classNames.bind(styles)
   return (
      <div className={cx('box')} onClick={onClick}>
         <Link to='/thiet-lap-ca-nhan' className={cx('box__content')}>
            Thiết lập cá nhân
         </Link>
         <Link to='/doi-mat-khau' className={cx('box__content', 'mb-3')}>
            Đổi mật khẩu
         </Link>
         <Divider />
         <Link to='/login' className={cx('box__content', 'mt-2', 'mb-2')}>
            Đăng xuất
         </Link>
      </div>
   )
}

export default Logout
