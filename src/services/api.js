import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/apiBlog/v1/',
    timeout: 5000
})

export const addComment = async (data) => {
    try {
        return await apiClient.post('/comment', data)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const getComment = async () => {
    try {
        return await apiClient.get('/comment')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}