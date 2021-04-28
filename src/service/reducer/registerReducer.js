import { REGISTER_SUCCESS, REGISTER_FAIL, REGISTER_INIT, REGISTER_END } from "../actions/actionsConstant"



const initialState = {
    register_init: false,
    status: false,
    message: ""
}

export const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_INIT:
            return { ...state, register_init: true }
        case REGISTER_END:
            return { ...state, register_init: false }
        case REGISTER_SUCCESS:
            return { ...state, status: true, message: "Register Successful" }
        case REGISTER_FAIL:
            return { ...state, status: false, message: "User Allready Exist" }
        default:
            return state
    }


}