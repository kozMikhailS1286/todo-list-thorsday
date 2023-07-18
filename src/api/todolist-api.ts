import axios from 'axios'
import {TaskType} from "../Todolist";


type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type CreateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {
        item: TodolistType
    }
}

type UpdateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {}
}

type DeleteTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {}
}

export type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '314b0124-4f3e-420a-9aac-2a8ba6dd682b',
    },
})

export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put<UpdateTodolistResponseType>(
            `todo-lists/${todolistId}`,
            { title: title }
        )
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = instance.delete<DeleteTodolistResponseType>(
            `todo-lists/${todolistId}`
        )
        return promise
    },
    createTodolist() {
        const promise = instance.post<ResponseType<{item: TodolistType}>>(
            'todo-lists',
            {title: 'API, newTodolistAPI'}
        )
        return promise
    },
    getTodolist() {
        const promise = instance.get<Array<TodolistType>>(
            'todo-lists'
        )
        return promise
    },
    getTasks(todolistId: string) {
        return instance.get(`todo-lists/${todolistId}/tasks`)
    },
    delateTask(todolistId: string, taskId: string) {
        return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    createTask(todolistId: string, taskTitle: string) {
        return instance.post<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks`,
            {title: taskTitle});
    },
    updateTask(todolistId: string, taskId: string, taskTitle: string) {
        return instance.put<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks/${taskId}`,
            {title: taskTitle});
    },
}