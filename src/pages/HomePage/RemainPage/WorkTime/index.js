import React from 'react'
import RenderWorkTime from './RenderWorkTime'
import styles from '.././RemainPage.module.scss'
import data from './dbDate'
import { useSelector, useDispatch } from 'react-redux'
import actionModal from '../../../../redux/action'

import { useState } from 'react'
import classNames from 'classnames/bind'

const WorkTime = () => {
	const cx = classNames.bind(styles)
	const [info, setInfo] = useState([])
	const [index, setIndex] = useState(() => data[9].month)
	const isShowModal = useSelector((store) => store.reducerHomePage.isShowModal)
	const dispatch = useDispatch()
	// const handleMonth = (e) => {
	// 	const currentMonthStr = e.target.value
	// 	const currentMonth = ~~currentMonthStr
	// 	console.log(currentMonth)

	// 	function indexMonth() {
	// 		if (currentMonth === 0) {
	// 			const DateOfMonth = new Date(2022, currentMonth, 0).getDate()
	// 			const DateOfNextMonth = new Date(
	// 				2022,
	// 				currentMonth + 1,
	// 				0
	// 			).getDate()
	// 			return {
	// 				DateOfMonth,
	// 				DateOfNextMonth,
	// 			}
	// 		} else if (currentMonth === 11) {
	// 			const DateOfPreMonth = new Date(2022, currentMonth - 1, 0).getDate()
	// 			const DateOfMonth = new Date(2022, currentMonth, 0).getDate()
	// 			return {
	// 				DateOfPreMonth,
	// 				DateOfMonth,
	// 			}
	// 		} else {
	// 			const DateOfPreMonth = new Date(2022, currentMonth - 1, 0).getDate()
	// 			const DateOfMonth = new Date(2022, currentMonth, 0).getDate()
	// 			const DateOfNextMonth = new Date(
	// 				2022,
	// 				currentMonth + 1,
	// 				0
	// 			).getDate()
	// 			return {
	// 				DateOfPreMonth,
	// 				DateOfMonth,
	// 				DateOfNextMonth,
	// 			}
	// 		}
	// 	}
	// 	const result = indexMonth()
	// 	console.log(result)
	// }
	const handleMonth = (e) => {
		const month = e.target.value
		setIndex(data[month].month)
	}
	// const currentYear = new Date().getFullYear()
	// const currentMonth = new Date().getMonth()
	// const currentDay = new Date(currentYear, currentMonth, 1).getDay()
	function getDay() {
		const currentDay = new Date().getDay()
		return currentDay
	}

	const handleClick = (e) => {
		console.log(e.target.value)
		const action = actionModal(!isShowModal)
		dispatch(action)
	}

	return (
		<div className={cx('worktime')}>
			<div className={cx('worktime__heading')}>
				<div className={cx('worktime__heading--icon')}>
					<i className='bx bxs-calendar-alt'></i>
				</div>
				<div className={cx('worktime__heading--color')}>
					<div>Trịnh Minh Quân</div> <span>/ Giờ làm việc</span>
				</div>
			</div>
			<div className={cx('worktime__select')}>
				<select className={cx('worktime__select--year')}>
					<option>2021</option>
					<option>2021</option>
				</select>
				<select
					className={cx('worktime__select--month')}
					onChange={handleMonth}
				>
					<option value='0'>1</option>
					<option value='1'>2</option>
					<option value='2'>3</option>
					<option value='3'>4</option>
					<option value='4'>5</option>
					<option value='5'>6</option>
					<option value='6'>7</option>
					<option value='7'>8</option>
					<option value='8'>9</option>
					<option value='9'>10</option>
					<option value='10'>11</option>
					<option value='11'>12</option>
				</select>
			</div>
			<div className={cx('worktime__info')}>
				<span className={cx('worktime__info--warn')}>Số buổi đi muộn</span>
				<span className={cx('worktime__info--primary')}>Số buổi OT: 0</span>
				<span className={cx('worktime__info--success')}>
					Số buổi về sớm: 0
				</span>
			</div>
			<div className={cx('worktime__calender')}>
				<div className={cx('worktime__calender--day')}>
					<span
						id={0 === getDay() ? 'active' : ''}
						className={cx('day')}
						style={{ color: 'red' }}
					>
						Chủ Nhật
					</span>
					<span id={1 === getDay() ? 'active' : ''} className={cx('day')}>
						Thứ Hai
					</span>
					<span id={2 === getDay() ? 'active' : ''} className={cx('day')}>
						Thứ Ba
					</span>
					<span id={3 === getDay() ? 'active' : ''} className={cx('day')}>
						Thứ Tư
					</span>
					<span id={4 === getDay() ? 'active' : ''} className={cx('day')}>
						Thứ Năm
					</span>
					<span id={5 === getDay() ? 'active' : ''} className={cx('day')}>
						Thứ Sáu
					</span>
					<span
						id={6 === getDay() ? 'active' : ''}
						className={cx('day')}
						style={{ color: 'red' }}
					>
						Thứ Bảy
					</span>
				</div>
				<div className={cx('worktime__calender--day', 'date')}>
					<RenderWorkTime
						info={info}
						index={index}
						onClick={handleClick}
					/>
				</div>
			</div>
		</div>
	)
}

export default WorkTime
