import { combineReducers } from 'redux'
import { LoginReducer } from './loginReducer'
import { RegisterReducer } from './registerReducer'
import { ApplyReducer } from './applyReducer'


export const AllReducer = combineReducers({ Login: LoginReducer, Register: RegisterReducer, Apply: ApplyReducer });
