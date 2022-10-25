import PleaseOffWork from './PleaseOffWork'
import Punish from './Punish'
import DateOffWork from './DateOffWork'
import ReportWork from './ReportWork'
import WorkTime from './WorkTime'
import MainPage from '../../../HomePage/Computer/MainPage'
import SettingPersonal from '../../../../pages/HomePage/Computer/RemainPage/SettingPersonal'
import ChangePassword from './ChangePassword'

const data = [
   { component: MainPage, link: '' },
   { component: WorkTime, link: 'gio-lam-viec' },
   { component: PleaseOffWork, link: 'xin-phep' },
   { component: DateOffWork, link: 'ngay-phep' },
   { component: Punish, link: 'quy-jvb' },
   { component: ReportWork, link: 'bao-cao-cong-viec' },
   { component: SettingPersonal, link: 'thiet-lap-ca-nhan' },
   { component: ChangePassword, link: 'doi-mat-khau' },
]

export default data
