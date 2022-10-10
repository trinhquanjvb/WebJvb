// file
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import Logout from './Box/Logout'
import dataMenu from './data'
import Notice from './Box/Notice'

// library
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { Person } from '@mui/icons-material'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import Badge from '@mui/material/Badge'
import StickyNote2Icon from '@mui/icons-material/StickyNote2'
import AnchorIcon from '@mui/icons-material/Anchor'
// import Lollipop from '@mui/icons-material/Lollipop'

function Menu() {
	const cx = classNames.bind(styles)
	const [data, setData] = useState({})
	const [isLogin, setIsLogin] = useState(false)
	const location = useLocation()
	const url = location.pathname.split('/')[1]
	const urlPersonal = `https://bbs-stg.hatoq.com/api/v1/user`
	const newToken = localStorage.getItem('token')
	const token = JSON.parse(newToken)

	const handleLogin = (e) => {
		e.stopPropagation()
		setIsLogin(!isLogin)
	}
	useEffect(() => {
		if (isLogin) {
			document.addEventListener('click', handleLogin)
			if (!isLogin) {
				document.removeEventListener('click', handleLogin)
			}
		}
	}, [isLogin])
	const stopPropagation = (e) => {
		e.stopPropagation()
	}
	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get(urlPersonal, {
					headers: {
						'Content-Type': 'application/json;charset=utf-8',
						Authorization: 'Bearer ' + token,
					},
				})
				.then((res) => setData(res.data.data))
		}
		fetchData().catch((res) => res)
	}, [])

	// render
	return (
		<div className={cx('menu')}>
			<div className={cx('menu__wrap')}>
				<ul className={cx('menu__list')}>
					{dataMenu.menu.map((element, i) => {
						return (
							<Link
								to={element.url}
								key={++i}
								className={element.url === url ? cx('active') : ''}
							>
								{element.value}
							</Link>
						)
					})}
				</ul>
				<div className={cx('menu__personal')}>
					<Person
						sx={{
							fontSize: 50,
							color: '#8f8787',
							cursor: 'pointer',
							borderRadius: '40%',
						}}
					/>

					<div
						className={cx('menu__personal--name')}
						onClick={handleLogin}
					>
						<div>{data?.name}</div>
						<ArrowDropDownIcon
							className={cx('arrowDown')}
							fontSize='small'
						/>
						{isLogin && <Logout onClick={stopPropagation} />}
					</div>
					<Badge badgeContent={3} color='error' className={cx('bagde')}>
						<NotificationsIcon className={cx('bell')}></NotificationsIcon>
						{/* <Lollipop /> */}
					</Badge>
				</div>
			</div>
		</div>
	)
}

export default Menu
