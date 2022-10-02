import { combineReducers } from "redux";


const initialState= {
    email: '',
    password: '',
    loginLogout: true,
    path: '/',
    menu: [
        {url: '/HomePage', value: 'Trang Chủ'},
        {url: '/HomePage/DayOffWork', value: 'Giờ làm việc'},
        {url: '/HomePage/Punish', value: 'Xin phép'},
        {url: '/HomePage/OffWork', value: 'Ngày phép'},
        {url: '/HomePage/ReportWork', value: 'Quỹ JVB'},
        {url: '/HomePage/WorkTime', value: 'Báo cáo công việc'},
    ],
    isLoading: undefined,
}

const reducerLogin= (state= initialState, action) => {
    switch(action.type) {
        case 'TYPE_EMAIL':
            return {
                ...state,
                email: action.payload
            }
        case 'TYPE_PASSWORD':
            return {
                ...state,
                password: action.payload
            }
        case 'SUBMIT_FORM':
            return {
                ...state,
                token: action.payload
            }
        case 'LOGIN_LOGOUT':
            return {
                ...state,
                loginLogout: action.payload.isLoginLogout,
                path: action.payload.path,
            }
        case 'LOADING':
            console.log(action.payload)
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}

export const  rootReducer= combineReducers({
    reducerLogin,
})
