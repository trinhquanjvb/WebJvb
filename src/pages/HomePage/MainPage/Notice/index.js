// file
import useFetch from './useFetch'
import styles from './Notice.module.scss'

// library
import axios from 'axios'
import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Notice({ isScreenMobile }) {
	const cx = classNames.bind(styles)

	let [indexData, setIndexData] = useState(3)
	const [subtract, setSuctract] = useState(1)
	const [showNext, setShowNext] = useState(false)
	const [showBack, setShowBack] = useState(false)
	const [loading, setLoading] = useState(true)
	const newToken = localStorage.getItem('token')
	const token = JSON.parse(newToken)
	const useData = useFetch(indexData, token)
	const useDataNext = useFetch(++indexData, token)
	const data = [useData, useDataNext]
	const [defaultImg, setDefaultImg] = useState(null)

	// onClick
	const handleBack = () => {
		setSuctract((prev) => prev - 2)
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 3300)
	}
	const handleNext = () => {
		setSuctract((prev) => prev + 2)
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 3300)
	}

	// set default img
	const handleDefaultImg = () => {
		setDefaultImg(
			'https://jvb-corp.com/uploads/news/year-end-party-2021/b%C3%ACa%20web%20yepxanh_thumb_s.png'
		)
	}

	// <<<<<<< HEAD
	// 	useEffect(() => {
	// 		const fetchData = async () => {
	// 			await axios
	// 				.get(`https://bbs-stg.hatoq.com/api/v1/events`, {
	// 					headers: {
	// 						'Content-Type': 'application/json;charset=utf-8',
	// 						Authorization: 'Bearer ' + token,
	// 					},
	// 				})
	// 				.then((res) => {
	// 					// setLoading(false)
	// 					const lengthData = res.data.data.events.length
	// 					if (lengthData >= subtract) {
	// 						const data = res.data.data.events[lengthData - subtract]
	// 						setShowBack(true)
	// 						setShowNext(false)
	// 						if (subtract === 1) {
	// 							setShowBack(false)
	// 						}
	// 						return setIndexData(data.id)
	// 					} else {
	// 						setShowNext(true)
	// 						return
	// 					}
	// 				})
	// 		}
	// 		fetchData()
	// 			.catch((res) => res)
	// 			.finally
	// 			// setLoading(true)
	// 			()
	// 	}, [subtract])
	// =======
	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get(`https://bbs-stg.hatoq.com/api/v1/events`, {
					headers: {
						'Content-Type': 'application/json;charset=utf-8',
						Authorization: 'Bearer ' + token,
					},
				})
				.then((res) => {
					const lengthData = res.data.data.events.length
					if (lengthData >= subtract) {
						const data = res.data.data.events[lengthData - subtract]
						setShowBack(true)
						setShowNext(false)
						if (subtract === 1) {
							setShowBack(false)
						}
						return setIndexData(data.id)
					} else {
						setShowNext(true)
						return
					}
				})
		}
		fetchData()
			.catch((res) => res)
			.finally()
	}, [subtract])

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 3000)
	}, [])

	// <<<<<<< HEAD
	// 	// return
	// 	return (
	// 		<div className={cx('container-fuild mt-4 mb-5')}>
	// 			<div className={cx('row')}>
	// 				{isScreenMobile || (
	// 					<div className='col-lg-1'>
	// 						{showBack && (
	// 							<KeyboardArrowLeftIcon
	// 								onClick={handleBack}
	// 								className={cx('arrow')}
	// 							/>
	// 						)}
	// 					</div>
	// 				)}
	// =======
	// return
	return (
		<div className={cx('container-fuild mt-4 mb-5')}>
			<div className={cx('row', 'gx-2')}>
				{isScreenMobile || (
					<div className='col-lg-1'>
						{showBack && (
							<KeyboardArrowLeftIcon
								onClick={handleBack}
								className={cx('arrow')}
							/>
						)}
					</div>
				)}
				{/* >>>>>>> 04607dbb1307f18861338a6ba8d263cfd7dab6de */}

				{data.map((element, i) => (
					<div className={cx('col-lg-5', 'col-sm-12', 'px-3-sm')} key={i}>
						<div className={cx('notice')}>
							<div className={cx('notice__wrap')}>
								{loading ? (
									<Skeleton className={cx('notice__skeleton')} />
								) : (
									<img
										src={defaultImg || element.image_url}
										alt='no image'
										className={cx('notice__img')}
										onError={handleDefaultImg}
									/>
								)}
							</div>
							<div className={cx('notice__wraps')}>
								{loading ? (
									<Skeleton
										className={cx('notice__skeleton', 'text')}
									/>
								) : (
									<div className={cx('notice__name')}>
										{element.name}
									</div>
								)}
								{loading ? (
									<Skeleton
										className={cx('notice__skeleton', 'text')}
									/>
								) : (
									<div className={cx('notice__introduce')}>
										{element.introduction}
									</div>
								)}
							</div>
						</div>
					</div>
				))}

				{/* <<<<<<< HEAD
				{isScreenMobile || (
					<div className='col-lg-1'>
						{showNext || (
							<KeyboardArrowRightIcon
								onClick={handleNext}
								sx={{ left: '-12px' }}
								className={cx('arrow')}
							/>
						)}
					</div>
				)}
			</div>
		</div>
	)
======= */}
				{isScreenMobile || (
					<div className='col-lg-1'>
						{showNext || (
							<KeyboardArrowRightIcon
								onClick={handleNext}
								sx={{ left: '-12px' }}
								className={cx('arrow', 'arrow__left')}
							/>
						)}
					</div>
				)}
			</div>
		</div>
	)
	// >>>>>>> 04607dbb1307f18861338a6ba8d263cfd7dab6de
}

export default Notice
