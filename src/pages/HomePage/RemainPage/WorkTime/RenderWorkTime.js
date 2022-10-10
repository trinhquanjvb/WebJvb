import styles from '.././RemainPage.module.scss'
import React, { useMemo, useState } from 'react'
import data from './dbDate'

import classNames from 'classnames/bind'

const RenderWorkTime = (obj) => {
   const cx = classNames.bind(styles)

   // render
   return obj.index.map((data, i) => (
      <span
         key={i}
         onClick={obj.onClick}
         className={cx('date', [data.disable], [data.rest])}
      >
         {data.date}
      </span>
   ))
}

export default RenderWorkTime
