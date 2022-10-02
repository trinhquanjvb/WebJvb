export const typeEmail= (payload) => ({
    type: 'TYPE_EMAIL',
    payload,
})

export const typePassword= (payload) => ({
    type: 'TYPE_PASSWORD',
    payload,
})

export const submitForm= (payload) => ({
    type: 'SUBMIT_FORM',
    payload
})

export const loginLogout= (payload) => ({
    type: 'LOGIN_LOGOUT',
    payload
})

export const  loading= (payload) => ({
    type: 'LOADING',
    payload
})