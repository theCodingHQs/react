import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000/api/',
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
})

api.interceptors.response.use((response) => {
    return response.data
})

export default api