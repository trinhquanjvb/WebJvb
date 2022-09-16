// file
import useFetch from '../../../components/useFetch'

// library
import {  useState } from 'react'
import {useSelector} from 'react-redux'
import styles from './MainPage.module.scss'
import classNames from 'classnames/bind'



function Notice ()  {
    const cx= classNames.bind(styles)
    const token= useSelector(store => store.reducerLogin.token)
    const useData= useFetch(3, token)
    const useDataNext= useFetch(4, token)
    
    return (
        <div className={cx('container-fuild mt-4 mb-5')}>
            <div className={cx('row')}>
                <div className={cx('col-lg-6')}>
                    <div className={cx('notice')}>
                            
                            <div class={cx('notice__wrap')}>
                                <img
                                    src={useData.image_url} alt= 'khum biet'
                                    className={cx('notice__img')}
                                />
                            </div>
                            <div className={cx('notice__wraps')}>
                                <div className={cx('notice__name')}>{useData.name}</div>
                                <div className={cx('notice__introduce')}>{useData.introduction}</div>
                            </div>
                    </div>
                </div>


                <div className={cx('col-lg-6')}>
                    <div className={cx('notice')}>

                        <div className={cx('notice__wrap')}>
                            <img
                                src={useDataNext.image_url} alt= 'khum biet'
                                className={cx('notice__img')}
                            />
                        </div>
                        <div className={cx('notice__wraps')}>
                            <div className={cx('notice__name')}>{useDataNext.name}</div>
                            <div className={cx('notice__introduce')}>{useDataNext.introduction}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
            
            
               
    )
}

export default Notice