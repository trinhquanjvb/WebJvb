import styles from './Input.module.scss'

import classNames from 'classnames/bind'

function Input({
   placehoder,
   title,
   readonly,
   onChange,
   pencil,
   important,
   ...passProps
}) {
   const cx = classNames.bind(styles)
   const props = {
      onChange,
      ...passProps,
   }

   return (
      <div className={cx('wrap__input')}>
         <input className={cx('input')} {...props} />
         {pencil && <i className={pencil}></i>}
         {important && <i className={important}></i>}
      </div>
   )
}

export default Input
