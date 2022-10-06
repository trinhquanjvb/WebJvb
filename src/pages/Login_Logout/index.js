// file
import Error from '../../components/Notice'
import styles from './Login_Logout.module.scss'
import PasswordReset from '../PasswordReset'

// library
import { useMemo, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import classNames from 'classnames/bind'

function LoginLogout() {
   const cx = classNames.bind(styles)
   const navigate = useNavigate()
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [errorEmail, setErrorEmail] = useState(false)
   const [errorPassword, setErrorPassword] = useState(false)
   const [noticeEmail, setNoticeEmail] = useState('')
   const [noticePassword, setNoticePassWord] = useState('')
   const regexEmail = /(.jvb@gmail.com|@jvb-corp.com)$/
   const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

   const handleEmail = (e) => {
      setEmail(e.target.value)
   }
   const handlePassword = (e) => {
      setPassword(e.target.value)
   }

   const [checked, setChecked] = useState(() => {
      const localChecked = localStorage.getItem('info')
      const checked = JSON.parse(localChecked)

      return checked || false
   })
   const handleChecked = (e) => {
      setChecked(!checked)
   }

   // remember me
   useMemo(() => {
      if (
         checked === true &&
         email === 'trinhnv@jvb-corp.com' &&
         password === '12345678'
      ) {
         const info = {
            email,
            password,
            checked,
         }
         localStorage.setItem('info', JSON.stringify(info))
      }
      if (checked === false) {
         setEmail('')
         setPassword('')
      }
   }, [checked])

   useMemo(() => {
      if (localStorage.getItem('info')) {
         const localInfo = localStorage.getItem('info')
         const info = JSON.parse(localInfo)
         setEmail(info.email)
         setPassword(info.password)
         setChecked(info.checked)
      }
   }, [])

   // submit
   const handleSubmit = async (e) => {
      e.preventDefault()

      // TH1: email vs pass rỗng: oki
      if (email === '') {
         setErrorEmail(true)
         setNoticeEmail('vui lòng nhập thông tin Email')
      }
      //  TH2: email != rỗng vs regexEmail= false ()
      else if (!regexEmail.test(email)) {
         setErrorEmail(true)
         setNoticeEmail('Email không tồn tại')
         setErrorPassword(false)
      }
      // TH3: regexEmail= true, pass = ''
      else if (regexEmail.test(email)) {
         setErrorEmail(false)
         if (password === '') {
            setErrorPassword(true)
            setNoticePassWord('vui lòng nhập thông tin Password')
         } else if (!regexPassword.test(password)) {
            setErrorPassword(true)
            setNoticePassWord('Password không đúng')
            if (email === 'trinhnv@jvb-corp.com' && password === '12345678') {
               setErrorEmail(false)
               setErrorPassword(false)

               const urlLogin = `https://bbs-stg.hatoq.com/api/v1/login`
               const info = {
                  email,
                  password,
               }
               await fetch(urlLogin, {
                  method: 'POST',
                  headers: {
                     Accept: 'application/json',
                     'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(info),
               })
                  .then((res) => res.json())
                  .then((res) => {
                     const token = res.meta.token
                     localStorage.setItem('token', JSON.stringify(token))

                     navigate('/')
                  })
            }
         }
      }
   }

   // render
   return (
      <div className={cx('website')}>
         <div className={cx('login')}>
            <form>
               <h3 className={cx('login__title')}>BBS System</h3>

               <input
                  className={cx('login__email')}
                  onChange={handleEmail}
                  placeholder="E-email"
                  value={email}
               />
               {errorEmail && (
                  <Error notice={noticeEmail} className={cx('error')} />
               )}

               <input
                  className={cx('login__password')}
                  onChange={handlePassword}
                  placeholder="Mật khẩu"
                  value={password}
                  type="password"
               />
               {errorPassword && (
                  <Error notice={noticePassword} className={cx('error')} />
               )}

               <div className={cx('login__confirm')}>
                  <input
                     id="save"
                     type="checkbox"
                     onChange={handleChecked}
                     checked={checked}
                  />
                  <label htmlFor="save">Nhớ đăng nhập</label>

                  <Link to="/password/reset">Quên mật khẩu?</Link>
               </div>

               <button onClick={handleSubmit} className={cx('login__btn')}>
                  ĐĂNG NHẬP
               </button>
            </form>
         </div>
      </div>
   )
}

export default LoginLogout
