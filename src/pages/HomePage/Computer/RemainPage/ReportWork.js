import styles from './RemainPage.module.scss'

import React from 'react'
import classNames from 'classnames/bind'

const ReportWork = () => {
	const cx = classNames.bind(styles)
	return <div className={cx('reportWork')}>ReportWork</div>
}

export default ReportWork
