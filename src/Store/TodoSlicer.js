import {createSlice} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = []

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
            if (action.payload === '') {
                alert('Поле не может быть пустым')
            } else {
                state.push({
                    title: action.payload,
                    id: uuidv4(),
                    isDone: false,
                    isChanged: false,
                })
            }
        },

        deleteTask: (state, action) =>  {
            return state.filter(item => item.id !== action.payload)
        },

        completeTask: (state, action) => {
            return state.map(item => item.id === action.payload ? {...item, isDone: !item.isDone} : item)
        },

        changingStatus: (state, action) => {
            if (action.payload.editText !== '') {
                return state.map(item => item.id === action.payload.id ? {...item, isChanged: !item.isChanged, title: action.payload.editText} : item)
            } else {
                alert('Поле не может быть пустым')
                return state
            }
        }
    }
})

export const {addTask, deleteTask, completeTask, changingStatus} = todoSlice.actions
export default todoSlice.reducer