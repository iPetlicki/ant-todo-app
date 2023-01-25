import {ADD_TASK, DELETE_TASK, CHANGE_TASK, COMPLETE_TASK} from "./Types";

const initialState = []

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const item = action.payload
            if (item.title !== '') {
                return [...state, item]
            } else {
                alert('This field cannot be empty')
                return state
            }

        case DELETE_TASK:
            const {deleteId} = action.payload
            return [...state].filter(item => item.id !== deleteId)

        case COMPLETE_TASK:
            const {completeId} = action.payload
            return [...state].map(item => item.id === completeId ? {...item, isDone: !item.isDone} : item)

        case CHANGE_TASK:
            const {changeId, text} = action.payload
            if (text !== '') {
                return [...state].map(item => item.id === changeId ? {...item, isChanged: !item.isChanged, title: text} : item)
            } else {
                alert('This field cannot be empty')
                return state
            }

        default:
            return state
    }
}