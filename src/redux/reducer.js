import { combineReducers } from "redux";


const initialState= {
    email: '',
    password: '',
    checked: false
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
        default:
            return state
    }
}

export const  rootReducer= combineReducers({
    reducerLogin,
})
