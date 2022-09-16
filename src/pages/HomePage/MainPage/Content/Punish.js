import classNames from 'classnames/bind'
import styles from './Content.module.scss'


function Punish() {
    const cx= classNames.bind(styles)


    return (
        <div className={cx('punish')}>
            <div className={cx('punish__img')}>
                <img src='https://bbs.hatoq.com/img/pigs/pig-1.png' alt='khum biet' />
            </div>
            <div className={cx('punish__info')}>
                <h2>Tiền phạt công ty tháng 09</h2>
                <h1>1.465.000</h1>
            </div>
        </div>
    )
}

export default Punish