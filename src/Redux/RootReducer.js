import {combineReducers} from "redux";
import {taskReducer} from './TaskReducer'

export const rootReducer = combineReducers({
    tasks: taskReducer,
})