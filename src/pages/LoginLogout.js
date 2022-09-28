// file
import Error from '../components/LoginLogout/Error'

// library
import  { useEffect, useMemo } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {typeEmail, typePassword, submitForm} from '../redux/action'
import {useState} from 'react'
import {useNavigate } from 'react-router-dom'
import styles from './Login_Logout.module.scss'
import classNames from 'classnames/bind'


function LoginLogout() {
  const cx= classNames.bind(styles)
  const dispatch= useDispatch()
  
  // handle type
  const handleEmail= (e) => {
    const action= typeEmail(e.target.value)
    dispatch(action)
  }
  const handlePassword= (e) => {
    const action= typePassword(e.target.value)
    dispatch(action)
  }

  let email= useSelector(store => store.reducerLogin.email)
  let password= useSelector(store => store.reducerLogin.password)
  const [localEmail, setLocalEmail]= useState(null)
  const [localPassword, setLocalPassword]= useState(null)

  const info= {
    email,
    password,
  }

  // handle checked
  const [checked, setChecked] = useState(false)
  const handleChecked= (e) => {
    setChecked(!checked)
  }

  // call api when click
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const navigate= useNavigate()

  useMemo(() => {
    if( checked === true  && email === 'trinhnv@jvb-corp.com' && password === '12345678') {
      localStorage.setItem('info', JSON.stringify(info))
      localStorage.setItem('isCheck', JSON.stringify(checked))
      console.log(localStorage.getItem('isCheck'))
    } else if (checked === false) {
      setLocalEmail('')
      setLocalPassword('')
    }
  }, [checked])

  useMemo(() => {
    const newInfo= localStorage.getItem('info')
    const newIsChecked= localStorage.getItem('isCheck')
    const parseInfo= JSON.parse(newInfo)
    const parseIsChecked= JSON.parse(newIsChecked)

      if( parseIsChecked=== true && parseInfo?.email !== '' && parseInfo?.password !== '' ) {
        setLocalEmail(parseInfo?.email)
        setLocalPassword(parseInfo?.password)
        setChecked(parseIsChecked)
      }
    }, [])
  
  const handleSubmit=(e) => {
    e.preventDefault()
    const newInfo= localStorage.getItem('info')
    const newIsChecked= localStorage.getItem('isCheck')
    const parseInfo= JSON.parse(newInfo)
    const parseIsChecked= JSON.parse(newIsChecked)

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
    

    if(  email === 'trinhnv@jvb-corp.com' && password === '12345678') {
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
      } else if( parseIsChecked=== true && parseInfo?.email !== '' && parseInfo?.password !== '' ) {
        setErrorEmail(false)
        setErrorPassword(false)
        setTimeout(() => {

          navigate('/HomePage')
        }, 1000)
      }
    }
    
  return (
    <div className={cx('website')}>
      <div className={cx('login')}>
        <form>
          <h3 className={cx('login__title')}>BBS System</h3>
  
          <input className={cx('login__email')} onChange={handleEmail} placeholder='E-email' value={localEmail || email} /> 
          {errorEmail && <Error text= 'Email' className={cx('error')} />}
          
          <input className={cx('login__password')} onChange={handlePassword} placeholder='Mật khẩu' value={ localPassword || password} />
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