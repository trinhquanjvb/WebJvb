import { combineReducers } from 'redux'
import reducerLogin from './Login_Logout'
import reducerHomePage from './HomePage'

export const rootReducer = combineReducers({
   reducerHomePage,
   // reducerLogin,
})
