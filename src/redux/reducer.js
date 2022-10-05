import { combineReducers } from "redux";


const initialState= {
    email: '',
    password: '',
    checked: false,
    loginLogout: true,
    path: '/',
    menu: [
        {url: '/trang-chu/gio-lam-viec', value: 'Giờ làm việc'},
        {url: '/trang-chu/xin-phep', value: 'Xin phép'},
        {url: '/trang-chu/ngay-phep', value: 'Ngày phép'},
        {url: '/trang-chu/quy-jvb', value: 'Quỹ JVB'},
        {url: '/trang-chu/bao-cao-cong-viec', value: 'Báo cáo công việc'},
    ],
    isLoading: null,
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
        case 'FORGOT_PASSWORD':
            return {
                ...state,
                checked: action.payload
            }
        case 'LOGIN_LOGOUT':
            return {
                ...state,
                loginLogout: action.payload.isLoginLogout,
                path: action.payload.path,
            }
        case 'LOADING':
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