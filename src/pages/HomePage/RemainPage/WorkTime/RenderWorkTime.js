// import styles from './WorkTime.module.scss'
// import Icon from './Icon'

// import classNames from 'classnames/bind'
// // import Calendar from 'react-calendar'
// import { useState } from 'react'
// // import DatePicker from 'sassy-datepicker'

// const RenderWorkTime = (obj) => {
//    const cx = classNames.bind(styles)
//    // const [date, setDate] = useState(new Date())
//    // const onChange = (date) => {
//    //    date.toString()
//    // }
//    // return (
//    //    <DatePicker
//    //       onChange={setDate}
//    //       disabled={true}
//    //       value={date}
//    //       className={cx('.sdp')}
//    //       weekStartsFrom='Monday'
//    //    />
//    // )
//    // const [value, setValue] = useState(() => new Date())
//    // const handleChange = () => {
//    //    setValue()
//    // }
//    // render
//    // return (
//    //    <Calendar
//    //       onChange={handleChange}
//    //       value={value}
//    //       defaultActiveStartDate={new Date()}
//    //       className={cx('calendar')}
//    //    />
//    // )

//    // render
//    return obj.index.map((data, i) => (
//       <button
//          disabled={data.disable ? true : false}
//          key={i}
//          onClick={obj.onClick}
//          className={cx(
//             'date',
//             [data.disable],
//             [data.rest],
//             [data.date] == new Date().getDate() &&
//                obj.selected == new Date().getMonth()
//                ? 'active'
//                : ''
//          )}
//       >
//          {data.icon && <Icon icon={data.icon} title={data.title} />}
//          {data.date}
//       </button>
//    ))
// }

// export default RenderWorkTime
