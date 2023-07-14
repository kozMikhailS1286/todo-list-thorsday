import axios from 'axios'

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
        const promise = instance.put(
            `todo-lists/${todolistId}`,
            { title: title }
        )
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = instance.delete(
            `todo-lists/${todolistId}`
        )
        return promise
    },
    createTodolist() {
        const promise = instance.post(
            'todo-lists',
            {title: 'newTodolistAPI'}
        )
        return promise
    },
    getTodolist() {
        const promise = instance.get(
            'todo-lists'
        )
        return promise
    },
}
