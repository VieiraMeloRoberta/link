import axios from 'axios';

export const key = "fd1d9bff5ebbeca7148be3170652f1f69d5b2900";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})
export default api;