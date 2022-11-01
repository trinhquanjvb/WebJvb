import styles from './Setting.module.scss'
import SettingHeading from '../SettingHeading'
import SettingInfo from '../SettingInfo'

import classNames from 'classnames/bind'

function Setting() {
   const cx = classNames.bind(styles)

   return (
      <div className={cx('setting')}>
         <SettingHeading />
         <SettingInfo />
         <SettingHeading transparent='transparent' />
      </div>
   )
}

export default Setting
