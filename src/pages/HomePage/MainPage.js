import Content from './MainPage/Content'
import Menu from './MainPage/Menu'
import Notice from './MainPage/Notice'

// library
import React from 'react'
import styles from './MainPage_RemainPage.module.scss'
import classNames from 'classnames/bind'

function MainPage  ()  {
  const cx= classNames.bind(styles)
  return (
    <div className={cx('mainPage')}>
      <Menu />
      <Notice />
      <Content />
    </div>
  )
}

export default MainPage