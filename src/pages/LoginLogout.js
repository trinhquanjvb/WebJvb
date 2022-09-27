// file
import Error from '../components/LoginLogout/Error'

// library
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {typeEmail, typePassword, submitForm} from '../redux/action'
import {useState, useMemo} from 'react'
import {useNavigate } from 'react-router-dom'
import styles from './Login_Logout.module.scss'
import classNames from 'classnames/bind'


function LoginLogout() {
  const cx= classNames.bind(styles)
  const dispatch= useDispatch()
  
  // hande type
  const handleEmail= (e) => {
    const action= typeEmail(e.target.value)
    dispatch(action)
  }
  const handlePassword= (e) => {
    const action= typePassword(e.target.value)
    dispatch(action)
  }

  const email= useSelector(store => store.reducerLogin.email)
  const password= useSelector(store => store.reducerLogin.password)

  const info= {
    email,
    password,
  }

  // call api when click
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const navigate= useNavigate()
  
  const handleSubmit=(e) => {
    e.preventDefault()

    if(email === '' && password=== '') {
      setErrorEmail(true)
      setErrorPassword(true)
    } else if(email === '' && password !== '') {
      setErrorEmail(true)
      setErrorPassword(false)
    } else if (password === '' && email !== '') {
      setErrorEmail(false)
      setErrorPassword(true)
    } else {
      setErrorEmail(false)
      setErrorPassword(false)
    }

    if(email === 'trinhnv@jvb-corp.com' && password === '12345678') {
      const urlLogin= `https://bbs-stg.hatoq.com/api/v1/login`
      
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
          const action= submitForm(res.meta.token)
          dispatch(action)

          const token= res.meta.token
          localStorage.setItem('token', JSON.stringify(token))
          navigate('/HomePage')
        })
      }
    }
    
  return (
    <div className={cx('website')}>
      <div className={cx('login')}>
        <form>
          <h3 className={cx('login__title')}>BBS System</h3>
  
          <input className={cx('login__email')} onChange={handleEmail} placeholder='E-email'  /> 
          {errorEmail && <Error text= 'Email' className={cx('error')} />}
          
          <input className={cx('login__password')} onChange={handlePassword} placeholder='Mật khẩu' />
          {errorPassword && <Error text= 'Password' className={cx('error')} />}
          
          <div className={cx('login__confirm')}>
            <input id='save' type='checkbox' />
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