import styles from './Setting.module.scss'

import classNames from 'classnames/bind'

function Setting() {
	const cx = classNames.bind(styles)
	return (
		<div className={cx('setting')}>
			<div className={cx('setting__option')}>
				<div className={cx('setting__option--heading')}>Ho so ca nhan</div>
				<div className={cx('setting__option--btn')}>button</div>
			</div>
			<div className={cx('setting__record')}>
				<div className={cx('setting__record--fullName')}>
					<div className={cx('fullName__info')}>Trinh </div>
					<div className={cx('fullName__avata')}>avata</div>
				</div>
				<div className={cx('setting__record--address')}></div>
				<div className={cx('setting__record--knowledge')}></div>
				<div className={cx('setting__record--account')}></div>
				<div className={cx('setting__record--skill')}></div>
				<div className={cx('setting__record--target')}></div>
				<div className={cx('setting__record--hobby')}></div>
				<div className={cx('setting__record--lingo')}></div>
				<div className={cx('setting__record--note')}></div>
			</div>
		</div>
	)
}

export default Setting
