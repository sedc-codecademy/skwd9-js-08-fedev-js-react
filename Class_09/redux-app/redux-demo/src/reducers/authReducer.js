

const defaultState= {
    loggedIn: false,
    user: null
}

const authReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'LOGGED_IN':
            return {
                ...state,
                loggedIn: true
            };
         case 'LOGGED_OUT':
            return {
                ...state,
                loggedIn: false
            };
        case 'USER_ME_SUCCESS':
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default authReducer;