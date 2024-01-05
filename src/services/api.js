import axios from "axios"

const api = axios.create({
    baseURL: 'https://the-one-api.dev/v2'
})

api.interceptors.request.use(async config => {
    const token = 'h7wxNqnHepMW8DJWM7Ob'

    config.headers.Authorization = `Bearer ${token}`

    return config
})

export default api