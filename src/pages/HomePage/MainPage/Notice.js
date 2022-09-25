// file
import useFetch from '../../../components/useFetch'

// library
import {  useState } from 'react'
import styles from './MainPage.module.scss'
import classNames from 'classnames/bind'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Notice ()  {
  const cx= classNames.bind(styles)
  const newToken= localStorage.getItem('token')
  const token= JSON.parse(newToken)

  let [indexNotice, setIndexNotice] = useState(3)
  console.log(indexNotice, ++indexNotice)
  // const [nextIndex, setNextIndex] = useState(4)
  const useData= useFetch(3, token)
  const useDataNext= useFetch(4, token)
  const data= [useData, useDataNext]

  // onClick
  const handleBack = () => {
  }
  const handleNext = () => {
      setIndexNotice(prev => prev + 2)
      // setNextIndex(indexNotice +3)
  }
  
  return (
      <div className={cx('container-fuild mt-4 mb-5')}>
          <div className={cx('row')}>
              <div className='col-lg-1'>
                    <KeyboardArrowLeftIcon 
                      onClick={handleBack} 
                      className={cx('arrow')}
                    />
              </div>

              {data.map((element, i) => (
                  <div className={cx('col-lg-5')} key={i}>
                      <div className={cx('notice')}>
                          <div class={cx('notice__wrap')}>
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
                    <KeyboardArrowRightIcon 
                      onClick={handleNext} 
                      sx={{left: '-12px'}} 
                      className={cx('arrow')}
                    />
              </div>
          </div>
      </div>
  )
}

export default Notice