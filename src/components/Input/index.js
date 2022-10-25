import styles from './Input.module.scss'

import { useSelector } from 'react-redux'
import classNames from 'classnames/bind'

function Input({
   title,
   placehoder,
   readonly = false,
   input,
   onChange,
   pencil,
   important,
   Tag = 'div',
   ...passProps
}) {
   const cx = classNames.bind(styles)
   const isShowIcon = useSelector((store) => store.reducerHomePage.isShowIcon)
   const props = {
      onChange,
      ...passProps,
   }
   

   return (
      <div className={cx('wrap__input')}>
         <Tag
            className={cx('input', {
               focus: isShowIcon,
            })}
            {...props}
         />
         {isShowIcon && (
            <>
               <i className={pencil}></i>
               <i className={important}></i>
            </>
         )}
      </div>
   )
}

export default Input
