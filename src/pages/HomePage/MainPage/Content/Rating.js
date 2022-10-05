import styles from './Content.module.scss'
import classNames from 'classnames/bind'


function Rating() {
    const cx= classNames.bind(styles)
    
    return (
        <div className={cx('rating')}>
            <h1 className={cx('rating__title')}>Góp Ý Công Ty</h1>
            <input 
                className={cx('rating__content')} 
                placeholder= 'rất mong nhận được ý kiến đóng góp hoặc đề xuất của bạn đến công ty'
            />
            <button className={cx('btn')}>Gửi Ngay</button>
        </div>
    )
}

export default Rating