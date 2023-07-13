import axios from 'axios'

const settings = {
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '314b0124-4f3e-420a-9aac-2a8ba6dd682b',
    },
}

export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        const promise = axios.put(
            `https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
            { title: title },
            settings
        )
        return promise
    },
}
