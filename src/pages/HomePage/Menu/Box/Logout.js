import styles from './Box.module.scss'

import React from 'react'
import { Divider } from '@mui/material'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const Logout = ({ onClick }) => {
   const cx = classNames.bind(styles)
   return (
      <div className={cx('box')} onClick={onClick}>
         <div className={cx('box__content')}>Thiết lập cá nhân</div>
         <div className={cx('box__content', 'mb-3')}>Đổi mật khẩu</div>
         <Divider />
         <Link to='/login ' className={cx('box__content', 'mt-2', 'mb-2')}>
            Đăng xuất
         </Link>
      </div>
   )
}

export default Logout
