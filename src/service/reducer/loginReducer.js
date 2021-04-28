import { LOGIN, LOGIN_INIT, LOGIN_END, LOGOUT } from "../actions/actionsConstant"



const initialState = {
    login_init: false,
    login_status: false,
    id: localStorage.getItem("id"),
    email: localStorage.getItem("email")

}

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_INIT:
            return { ...state, login_init: true }
        case LOGIN_END:
            return { ...state, login_init: false }
        case LOGIN:
            return { ...state, login_status: true }
        case LOGOUT:
            return { ...state, login_status: false }
        default:
            return state
    }


}