import styles from './RemainPage.module.scss'

import React from 'react'
import classNames from 'classnames/bind'

const PleaseOffWork = () => {
   const cx = classNames.bind(styles)
   return <div className={cx('pleaseOffWork')}>PleaseOffWork</div>
}

export default PleaseOffWork
