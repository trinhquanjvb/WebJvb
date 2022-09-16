// library
import React from 'react'

// file
import MainPage from './HomePage/MainPage'
import RemainPage from './HomePage/RemainPage'
import styles from './HomePage.module.scss'
import classNames from 'classnames/bind'


const HomePage = () => {
  const cx= classNames.bind(styles)
  return (
    <div className={cx('HomePage')}>
      <RemainPage />
      <MainPage />
    </div>
  )
}

export default HomePage