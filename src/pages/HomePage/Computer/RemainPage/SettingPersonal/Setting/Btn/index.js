import classNames from 'classnames/bind'
import styles from './btn.module.scss'

function Btn({onClick}) {

   const cx = classNames.bind(styles)
   return (
      <>
   <button onClick={onClick} className={cx('btn', 'green')}>Đóng</button>  
   <button className={cx('btn', 'blue')}>Sửa</button>  
   </>
   );
}

export default Btn;