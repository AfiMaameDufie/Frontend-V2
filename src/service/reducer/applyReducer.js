import { APPLY_SUCCESS, APPLY_FAIL, APPLY_INIT, APPLY_END } from "../actions/actionsConstant"


const initialState = {
    status: false,
    init: false
}

export const ApplyReducer = (state = initialState, action) => {
    switch (action.type) {
        case APPLY_INIT:
            return { ...state, init: true }
        case APPLY_END:
            return { ...state, init: false }
        case APPLY_SUCCESS:
            return { ...state, status: true }
        case APPLY_FAIL:
            return { ...state, status: false }
        default:
            return state
    }


}
