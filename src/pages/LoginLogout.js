// file
import Error from '../components/LoginLogout/Error'
import { loginLogout } from '../redux/action'

// library

import {useMemo, useState} from 'react'
import {useNavigate } from 'react-router-dom'
import styles from './Login_Logout.module.scss'
import classNames from 'classnames/bind'


function LoginLogout() {
  const cx= classNames.bind(styles)
  const navigate= useNavigate()
  
  // handle type
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const handleEmail= (e) => {
    setEmail(e.target.value)
  }
  const handlePassword= (e) => {
   setPassword(e.target.value)
  }

  // handle checked
  const [checked, setChecked] = useState(() => {
    const localChecked= localStorage.getItem('info')
    const checked= JSON.parse(localChecked)

    return checked || false
  })
  const handleChecked= (e) => {
    setChecked(!checked)
  }

  // call api when click
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)

  // remember me
  useMemo(() => {
    if(checked === true && email === 'trinhnv@jvb-corp.com' && password === '12345678') {
      const info= {
        email,
        password,
        checked,
      }
      localStorage.setItem('info', JSON.stringify(info))
    }  if(checked === false) {
      setEmail('')
      setPassword('')
    }
  }, [checked])

  useMemo(() => {
    if(localStorage.getItem('info')) {
      const localInfo= localStorage.getItem('info')
      const info= JSON.parse(localInfo)
      setEmail(info.email)
      setPassword(info.password)
      setChecked(info.checked)
  }
  }, [])
 
  // submit  
  const handleSubmit=(e) => {
    e.preventDefault()
   if( email === '' && password === '') {
    setErrorEmail(true)
    setErrorPassword(true)
   } else if (email === '' && password !== '') {
    setErrorEmail(true)
    setErrorPassword(false)
   } else if (email !== '' && password === '') {
    setErrorEmail(false)
    setErrorPassword(true)
   } else {
    setErrorEmail(false)
    setErrorPassword(false)
   }

    if(  email === 'trinhnv@jvb-corp.com' && password === '12345678') {
      const urlLogin= `https://bbs-stg.hatoq.com/api/v1/login`
      const info= {
        email,
        password,
      }
      
       fetch(urlLogin, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info)
      })
        .then(res => res.json())
        .then(res => {
          const token= res.meta.token
          localStorage.setItem('token', JSON.stringify(token))
          setTimeout(() => {

            navigate('HomePage')
          }, 1000)
        })
      }
    }

  // render
  return (
    <div className={cx('website')}>
      <div className={cx('login')}>
        <form>
          <h3 className={cx('login__title')}>BBS System</h3>
  
          <input className={cx('login__email')} onChange={handleEmail} placeholder='E-email' value={email} /> 
          {errorEmail && <Error text= 'Email' className={cx('error')} />}
          
          <input className={cx('login__password')} onChange={handlePassword} placeholder='Mật khẩu' value={password} />
          {errorPassword && <Error text= 'Password' className={cx('error')} />}
          
          <div className={cx('login__confirm')}>
            <input id='save' type='checkbox' onChange={handleChecked} checked={checked}/>
            <label htmlFor='save' >Nhớ đăng nhập</label>
  
            <span>Quên mật khẩu?</span>
          </div>
  
          <button
            onClick={handleSubmit}
            className={cx('login__btn')}
          >
            ĐĂNG NHẬP
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginLogout