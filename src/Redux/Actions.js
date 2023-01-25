import {ADD_TASK, DELETE_TASK, CHANGE_TASK, COMPLETE_TASK} from "./Types";
import { v4 as uuidv4 } from 'uuid';

export const addTask = (text) => {
    return {
        type: ADD_TASK,
        payload: {
            title: text,
            id: uuidv4(),
            isDone: false,
        }
    }
}

export const deleteTask = (deleteId) => {
    return {
        type: DELETE_TASK,
        payload: {
            deleteId
        }
    }
}

export const completeTask = (completeId) => {
    return {
        type: COMPLETE_TASK,
        payload: {
            completeId
        }
    }
}

export const changingStatus = (changeId, text) => {
    return {
        type: CHANGE_TASK,
        payload: {
            changeId,
            text
        }
    }
}