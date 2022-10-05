import styles from './Error.module.scss'
import classNames from 'classnames/bind'

const Error= ({notice})  => {
    const cx= classNames.bind(styles)

    return (
        <div className={cx('error')}>
            {notice}      
        </div>
    )
}

export default Error