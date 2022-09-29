import styles from './Error.module.scss'
import classNames from 'classnames/bind'

const Error= ({text})  => {
    const cx= classNames.bind(styles)

    return (
        <div className={cx('error')}>
            vui long nhap vao truong {`${text}`}       
        </div>
    )
}

export default Error