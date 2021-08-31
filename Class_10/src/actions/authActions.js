

export const logIn = () => ({
    type: 'LOGGED_IN'
})

export const logOut = () => ({
    type: 'LOGGED_OUT'
})

export const userMe = user => ({
    type: 'USER_ME_SUCCESS',
    user
})