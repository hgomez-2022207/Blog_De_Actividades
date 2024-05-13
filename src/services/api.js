import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/twitch/v1',
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

export const getComment = async (comments) => {
    console.log
    try {
        return await apiClient.get('/comment')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}