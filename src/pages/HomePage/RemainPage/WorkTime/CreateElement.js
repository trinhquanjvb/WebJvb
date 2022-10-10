import React, { useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'

const CreateElement = (day = 6) => {
	const [data, setData] = useState([])
	useMemo(() => {
		if (data.length) setData((prev) => [...prev, --day])
	}, [])
}

export default CreateElement
