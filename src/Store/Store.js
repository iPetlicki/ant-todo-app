import {configureStore} from "@reduxjs/toolkit";
import todoSlice from './TodoSlicer'

export const store = configureStore({
    reducer: {
        todo: todoSlice
    }
})