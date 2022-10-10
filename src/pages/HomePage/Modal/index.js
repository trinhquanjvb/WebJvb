import styles from './Modal.module.scss'
import actionModal from '../../../redux/action/index'

import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames/bind'

function Modal() {
	const cx = classNames.bind(styles)
	const dispatch = useDispatch()
	const isShowModal = useSelector((store) => store.reducerHomePage.isShowModal)

	const handleModal = (e) => {
		const action = actionModal(!isShowModal)
		dispatch(action)
	}
	const handleModalContainer = (e) => {
		e.stopPropagation()
	}
	// render
	return (
		<div className={cx('modal')} onClick={handleModal}>
			<div className={cx('modal_container')} onClick={handleModalContainer}>
				<div className={cx('modal__heading')}>Xin Phép</div>
				<div className={cx('modal__radio')}>
					<div>
						<input type='radio' />
						<label>OT dự án</label>
					</div>
					<div>
						<input type='radio' />
						<label>OT cá nhân</label>
					</div>
				</div>
				<select className={cx('modal__select')}>
					<option>Chọn dự án</option>
				</select>
				<div className={cx('modal__time')}>
					<div className={cx('modal__time--start')}>
						<label htmlFor='time__start'>Thời gian bắt đầu*</label>
						<input
							type='time'
							className={cx('time__start')}
							id='time__start'
						/>
					</div>
					<div className={cx('modal__time--end')}>
						<label htmlFor='time__end'>Thời gian kết thúc*</label>
						<input
							type='time'
							className={cx('time__end')}
							id='time__end'
						/>
					</div>
				</div>
				<input className={cx('modal__rate')} />
				<button className={cx('modal__btn')}>Gửi Đơn</button>
			</div>
		</div>
	)
}
export default Modal
