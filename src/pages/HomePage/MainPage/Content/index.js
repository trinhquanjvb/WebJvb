// file
import Events from './Events'
import Rating from './Rating'
import Projects from './Projects'
import Punish from './Punish'

// library
import classNames from 'classnames/bind'
import styles from './Content.module.scss'

const fakeData = {
	events: [
		{
			id: 1,
			image: 'https://bbs.hatoq.com/file-manager/photos/2/1234F580-E0F7-4B0D-96ED-34791BEEF6B7.png',
			title: 'JVB TOURNAMENT OF CHAMPIONSHIP 2022',
			time: ' 2022-09-05',
			location: 'Bí mật',
			introduction: 'ĐẠI HỘI THỂ DỤC THỂ THAO TOÀN JVB VIETNAM',
		},
		{
			id: 2,
			image: 'https://bbs.hatoq.com/file-manager/photos/2/sfsf.png',
			title: 'Information security Seminar: Quy định về bảo mật và an toàn thông tin',
			time: '  2022-08-22',
			location: 'Block D JVB Việt Nam - F25 Roman Plaza',
			introduction: 'Bạn đã làm những cách gì để bảo mật thông tin ???',
		},
		{
			id: 3,
			image: 'https://bbs.hatoq.com/file-manager/photos/2/Screenshot_20.png',
			title: 'Party Sinh nhật quý III/2022',
			time: '  2022-08-10',
			location: 'Sẽ được bật mí vào ngày 9/8/2022',
			introduction:
				'Party Quý III đang gõ cửa tường BBS nhà bạn !!! Đăng kí ',
		},
	],
}

const Content = () => {
	const cx = classNames.bind(styles)

	return (
		<div className={cx('content')}>
			<div className='row'>
				<div className='col-lg-8 col-sm-12 gx-0'>
					{fakeData.events.map((element, i) => {
						return <Events element={element} key={i} />
					})}
					<button className={cx('btn')}>show more</button>
					<Rating />
				</div>
				<div className='col-lg-4 col-sm-12'>
					<Punish />
					<Projects />
				</div>
			</div>
		</div>
	)
}

export default Content
