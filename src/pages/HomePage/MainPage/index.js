import Content from './Content'
import Notice from './Notice'

// library
import React from 'react'
import styles from './MainPage.module.scss'
import classNames from 'classnames/bind'

function MainPage  ()  {
  const cx= classNames.bind(styles)
  return (
    <div className={cx('mainPage')}>
      <Notice />
      <Content />
    </div>
  )
}

export default MainPage