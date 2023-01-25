import http from "./axiosContext"

const authenticate = (data) => {
    return http.post("/users/authenticate", data)
    }
const logout = (data) => {
        return http.post("/users/logout", data)
    }
const refresh = (data) => {
        return http.post("/users/refresh", data)
        }
export default {
    authenticate,logout,refresh
    }