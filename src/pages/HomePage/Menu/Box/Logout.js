import styles from './Box.module.scss'

import React from 'react'
import { Divider } from '@mui/material'
import classNames from 'classnames/bind'

const Logout = ({ onClick }) => {
	const cx = classNames.bind(styles)
	return (
		<div className={cx('box')} onClick={onClick}>
			<div className={cx('box__content')}>Thiết lập cá nhân</div>
			<div className={cx('box__content', 'mb-3')}>Đổi mật khẩu</div>
			<Divider />
			<div className={cx('box__content', 'mt-2', 'mb-2')}>Đăng xuất</div>
		</div>
	)
}

export default Logout
