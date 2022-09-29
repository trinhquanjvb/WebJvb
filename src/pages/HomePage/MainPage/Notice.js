// file
import useFetch from '../../../components/useFetch'

// library
import {  useState, useEffect } from 'react'
import styles from './MainPage.module.scss'
import classNames from 'classnames/bind'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import axios from 'axios'

function Notice ()  {
  const cx= classNames.bind(styles)
  
  //   maintain
    const newToken= localStorage.getItem('token')
    const token= JSON.parse(newToken)
    let [indexData, setIndexData] = useState(3)
    const [subtract, setSuctract] = useState(1)
    const [showNext, setShowNext] = useState(false)
    const [showBack, setShowBack] = useState(false)
    useEffect(() => {
        
        axios.get(`https://bbs-stg.hatoq.com/api/v1/events`, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': 'Bearer ' + token
            }})
            .then(res => {
                const lengthData= res.data.data.events.length
                if(lengthData >= subtract) {
                    const data= res.data.data.events[lengthData -subtract]
                    setShowBack(true)
                    setShowNext(false)
                    if(subtract === 1) {
                        setShowBack(false)
                    }
                    return setIndexData(data.id)
                } else {
                    setShowNext(true)
                    return
                }
            })
    }, [subtract])
    const useData= useFetch(indexData, token)
    const useDataNext= useFetch(++indexData, token)
    const data= [useData, useDataNext]

  // onClick
  const handleBack = () => {
    setSuctract(prev => prev - 2)
}
const handleNext = () => {
    //   setIndexNotice(prev => prev + 2)
    // setNextIndex(indexNotice +3)
    setSuctract(prev => prev + 2)
}
  
  return (
      <div className={cx('container-fuild mt-4 mb-5')}>
          <div className={cx('row')}>
              <div className='col-lg-1'>
                    {showBack && <KeyboardArrowLeftIcon 
                      onClick={handleBack} 
                      className={cx('arrow')}
                    />}
              </div>

              {data.map((element, i) => (
                  <div className={cx('col-lg-5')} key={i}>
                      <div className={cx('notice')}>
                          <div className={cx('notice__wrap')}>
                              <img
                                  src={element.image_url} alt= 'no image'
                                  className={cx('notice__img')}
                              />
                          </div>
                          <div className={cx('notice__wraps')}>
                              <div className={cx('notice__name')}>{element.name}</div>
                              <div className={cx('notice__introduce')}>{element.introduction}</div>
                          </div>
                      </div>
                  </div>
              ))}

              <div className='col-lg-1'>
                    {showNext || <KeyboardArrowRightIcon 
                      onClick={handleNext} 
                      sx={{left: '-12px'}} 
                      className={cx('arrow')}
                    />}
              </div>
          </div>
      </div>
  )
}

export default Notice