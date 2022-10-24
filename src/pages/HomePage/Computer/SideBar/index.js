import styles from './SideBar.module.scss'

import classNames from 'classnames/bind'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

// material
import React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Divider } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import SportsScoreIcon from '@mui/icons-material/SportsScore'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import SavedSearchIcon from '@mui/icons-material/SavedSearch'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import RuleFolderIcon from '@mui/icons-material/RuleFolder'
import RateReviewIcon from '@mui/icons-material/RateReview'
import ScreenShareIcon from '@mui/icons-material/ScreenShare'
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor'
import LightbulbIcon from '@mui/icons-material/Lightbulb'

const Sidebar = ({ onClick }) => {
   const cx = classNames.bind(styles)
   const [data, setData] = useState('')
   const [defaultImg, setDefaultImg] = useState(null)
   const newToken = localStorage.getItem('token')
   const token = JSON.parse(newToken)
   const urlPersonal = `https://bbs-stg.hatoq.com/api/v1/user`
   const handleDefaultImg = () => {
      setDefaultImg('https://jvb-corp.com/img/logo.png')
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
            .then((res) => setData(res.data.data.team))
      }
      fetchData().catch((res) => res)
   }, [])
   return (
      <div className={cx('remainPage')} onClick={onClick}>
         <div className={cx('remainPage__wrap')}>
            <img
               // src='https://jvb-corp.com/img/logo.png'
               src={defaultImg || data.banner}
               alt='khum co'
               onError={handleDefaultImg}
            />
         </div>
         <h3 className={cx('remain__title')}>{data?.name}</h3>

         <Box
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
         >
            <nav aria-label='main mailbox folders'>
               <List className={cx('remain__list')}>
                  <Link to={'/'}>
                     <ListItem
                        disablePadding
                        className={cx('remain__list--item', 'active')}
                     >
                        <ListItemButton>
                           <ListItemIcon>
                              <HomeIcon color='primary' />
                           </ListItemIcon>
                           <ListItemText primary='Trang Chủ' />
                        </ListItemButton>
                     </ListItem>
                  </Link>
                  <Divider />
                  <ListItem disablePadding className={cx('remain__list--item')}>
                     <ListItemButton>
                        <ListItemIcon>
                           <SportsScoreIcon sx={{ color: 'pink' }} />
                        </ListItemIcon>
                        <ListItemText primary='Thông báo từ JVB' />
                     </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding className={cx('remain__list--item')}>
                     <ListItemButton>
                        <ListItemIcon>
                           <TagFacesIcon sx={{ color: '#F783AC' }} />
                        </ListItemIcon>
                        <ListItemText primary='Tin tức, sự kiện' />
                     </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding className={cx('remain__list--item')}>
                     <ListItemButton>
                        <ListItemIcon>
                           <CalendarMonthIcon color='secondary' />
                        </ListItemIcon>
                        <ListItemText primary='Đặt phòng họp' />
                     </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding className={cx('remain__list--item')}>
                     <ListItemButton>
                        <ListItemIcon>
                           <SavedSearchIcon color='primary' />
                        </ListItemIcon>
                        <ListItemText primary='Danh sách dự án' />
                     </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding className={cx('remain__list--item')}>
                     <ListItemButton>
                        <ListItemIcon>
                           <AssignmentIndIcon color='secondary' />
                        </ListItemIcon>
                        <ListItemText primary='Danh sách nhân viên' />
                     </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding className={cx('remain__list--item')}>
                     <ListItemButton>
                        <ListItemIcon>
                           <RuleFolderIcon sx={{ color: '#F783AC' }} />
                        </ListItemIcon>
                        <ListItemText primary='Nội quy/ Quy định' />
                     </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding className={cx('remain__list--item')}>
                     <ListItemButton>
                        <ListItemIcon>
                           <RateReviewIcon color='action' />
                        </ListItemIcon>
                        <ListItemText primary='Kinh nghiệm làm việc' />
                     </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding className={cx('remain__list--item')}>
                     <ListItemButton>
                        <ListItemIcon>
                           <ScreenShareIcon sx={{ color: '#FD7E14' }} />
                        </ListItemIcon>
                        <ListItemText primary='Chia sẻ tài liệu' />
                     </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding className={cx('remain__list--item')}>
                     <ListItemButton>
                        <ListItemIcon>
                           <ScreenshotMonitorIcon color='success' />
                        </ListItemIcon>
                        <ListItemText primary='Quản lý thiết bị' />
                     </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding className={cx('remain__list--item')}>
                     <ListItemButton>
                        <ListItemIcon>
                           <LightbulbIcon color='primary' />
                        </ListItemIcon>
                        <ListItemText primary='Đề xuất góp ý' />
                     </ListItemButton>
                  </ListItem>
               </List>
            </nav>
         </Box>
      </div>
   )
}

export default Sidebar
