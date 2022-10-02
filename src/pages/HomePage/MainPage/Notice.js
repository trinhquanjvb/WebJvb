// file
import useFetch from '../../../components/useFetch'

// library
import axios from 'axios'
import {  useState, useEffect } from 'react'
import styles from './MainPage.module.scss'
import classNames from 'classnames/bind'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {useSelector, useDispatch} from 'react-redux'

function Notice ()  {
    const cx= classNames.bind(styles)
  
    let [indexData, setIndexData] = useState(3)
    const [subtract, setSuctract] = useState(1)
    const [showNext, setShowNext] = useState(false)
    const [showBack, setShowBack] = useState(false)
    // const loading= useSelector(store => store.reducerLogin.isLoading)
    const [loading, setLoading]= useState(null)
    
    const newToken= localStorage.getItem('token')
    const token= JSON.parse(newToken)
    useEffect(() => {
        axios.get(`https://bbs-stg.hatoq.com/api/v1/events`, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': 'Bearer ' + token
            }})
            .then(res => {
                setLoading(false)
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
                    setShowNext(false)
                    return
                }
            })
            .catch(res => console.log(res || 'khong co data'))
            .finally(
                setLoading(true)
            )
    }, [subtract])
    const useData= useFetch(indexData, token)
    const useDataNext= useFetch(++indexData, token)
    const data= [useData, useDataNext]

    // onClick
    const handleBack = () => {
        setSuctract(prev => prev - 2)
    }
    const handleNext = () => {
        setSuctract(prev => prev + 2)
    }

    // set default img
    const [defaultImg, setDefaultImg] = useState(null)
    const handleDefaultImg= () => {
        setDefaultImg('https://jvb-corp.com/uploads/news/year-end-party-2021/b%C3%ACa%20web%20yepxanh_thumb_s.png')
    }
    
    // return
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
                                    src={defaultImg || element.image_url}
                                    alt= 'no image'
                                    className={cx('notice__img')}
                                    onError={handleDefaultImg}
                                />
                          </div>
                          <div className={cx('notice__wraps')}>
                              { loading ? (
                                <Skeleton
                                    // square
                                    // height="50"
                                />
                              ) :(<div className={cx('notice__name')}>{element.name}</div>)}
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