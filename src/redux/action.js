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

export const forgotPassword= (payload) => ({
    type: 'FORGOT_PASSWORD',
    payload
})