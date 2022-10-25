import styles from './ChangePassword.module.scss'
import classNames from 'classnames/bind'

function ChangePassword() {
   const cx = classNames.bind(styles)
   return <div className={cx('changePassword')}>Change PasswordReset</div>
}

export default ChangePassword
