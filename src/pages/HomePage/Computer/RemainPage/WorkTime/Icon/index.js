import styles from './Icon.module.scss'

import Tippy from '@tippyjs/react'
import classNames from 'classnames/bind'

const Icon = (data) => {
	const cx = classNames.bind(styles)
	return (
		<div className={cx('icon')}>
			<Tippy
				className={cx('icon__tippy')}
				content={data.title}
				animation={true}
				maxWidth={150}
				placement='top-end'
				arrow={true}
			>
				<i className={cx(data.icon)}></i>
			</Tippy>
		</div>
	)
}

export default Icon
