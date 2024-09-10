import {ADD,DELETE} from './ToDoTypes.js'

export const AddBook = (text) => {
    return {
        type:ADD,
        payload:text
    }
}

export const DeleteBook = (id) => {
    return {
        type:DELETE,
        payload:id
    }
}