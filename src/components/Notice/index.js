import styles from './Notice.module.scss'
import classNames from 'classnames/bind'

const Error = ({ notice, smallFont = false }) => {
   const cx = classNames.bind(styles)

   const classes = {
      smallFont,
   }
   return <div className={cx('error', classes)}>{notice}</div>
}

export default Error
