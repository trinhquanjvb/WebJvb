// file
import Error from '../components/LoginLogout/Error'

// library
import  { useEffect, useMemo, useRef, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {typeEmail, typePassword, submitForm, forgotPassword} from '../redux/action'
import {useNavigate } from 'react-router-dom'
import styles from './Login_Logout.module.scss'
import classNames from 'classnames/bind'


function LoginLogout() {
  const cx= classNames.bind(styles)
  const dispatch= useDispatch()
  const selector= useSelector()
  
  // handle type
  const handleEmail= (e) => {
    const action= typeEmail(e.target.value)
    dispatch(action)
  }
  const handlePassword= (e) => {
    const action= typePassword(e.target.value)
    dispatch(action)
  }
  let email= useRef(undefined)
  let password= useRef(undefined)
  let checked= useRef(undefined)
  
  useEffect(() => {
    email.current= selector(store => store.reducerLogin.email)
  },[email.current])
  useEffect(() => {
    password.current= selector(store => store.reducerLogin.password)
  },[password.current])
  useEffect(() => {
    checked.current= selector(store => store.reducerLogin.checked)

  },[checked.current])

  // handle checked
  const handleChecked= (e) => {
    const action= forgotPassword(!checked.current)
    dispatch(action)
  }
  
  const info= {
    email: email.current,
    password: password.current,
  }

  // call api when click
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const navigate= useNavigate()
  
  const [localEmail, setLocalEmail]= useState(null)
  const [localPassword, setLocalPassword]= useState(null)
  useMemo(() => {
    if( checked.current === true  && email.current === 'trinhnv@jvb-corp.com' && password.current === '12345678') {
      localStorage.setItem('info', JSON.stringify(info))
      localStorage.setItem('isCheck', JSON.stringify(checked.current))
      console.log(email, password)
    } 
    // else if (checked === false) {
    //   setLocalEmail('')
    //   setLocalPassword('')
    // }
  }, [checked.current])

  useMemo(() => {
    const newInfo= localStorage?.getItem('info')
    const newIsChecked= localStorage?.getItem('isCheck')
    const parseInfo= JSON.parse(newInfo)
    const parseIsChecked= JSON.parse(newIsChecked)
    console.log(parseIsChecked, parseInfo?.email, parseInfo?.password)

      if( parseIsChecked=== true && parseInfo?.email === 'trinhnv@jvb-corp.com' && parseInfo?.password === '12345678' ) {
        email.current= parseInfo?.email
        password.current= parseInfo?.password
        checked.current= parseIsChecked
        console.log(email, password)
      }
    }, [])
  
  const handleSubmit=(e) => {
    e.preventDefault()
    // const newInfo= localStorage.getItem('info')
    // const newIsChecked= localStorage.getItem('isCheck')
    // const parseInfo= JSON.parse(newInfo)
    // const parseIsChecked= JSON.parse(newIsChecked)

    if(email.current === '' && password.current=== '') {
      setErrorEmail(true)
      setErrorPassword(true)
    } else if(email.current === '' && password.current !== '') {
      setErrorEmail(true)
      setErrorPassword(false)
    } else if (password.current === '' && email.current !== '') {
      setErrorEmail(false)
      setErrorPassword(true)
    } 
    // else {
    //   setErrorEmail(false)
    //   setErrorPassword(false)
    // }
    

    if(  email.current === 'trinhnv@jvb-corp.com' && password.current === '12345678') {
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
          setTimeout(() => {

            navigate('/HomePage')
          }, 1000)
        })
      } 
      // else if( parseIsChecked=== true && parseInfo?.email !== '' && parseInfo?.password !== '' ) {
      //   setErrorEmail(false)
      //   setErrorPassword(false)
      //   setTimeout(() => {

      //     navigate('/HomePage')
      //   }, 1000)
      // }
    }
    useMemo(() => {
      
      console.log(email.current, password.current)
    }, [])

  return (
    <div className={cx('website')}>
      <div className={cx('login')}>
        <form>
          <h3 className={cx('login__title')}>BBS System</h3>
  
          <input
            className={cx('login__email')}
            onChange={handleEmail} placeholder='E-email'
            value={localEmail || email.current} 
          /> 
          {errorEmail && <Error text= 'Email' className={cx('error')} />}
          <input
            className={cx('login__password')}
            onChange={handlePassword} placeholder='Mật khẩu'
            value={ localPassword || password.current} 
          />
          {errorPassword && <Error text= 'Password' className={cx('error')} />}
          
          <div className={cx('login__confirm')}>
            <input id='save' type='checkbox' onChange={handleChecked} checked={checked.current}/>
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