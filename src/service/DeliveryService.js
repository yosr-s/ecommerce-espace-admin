import http from "./axiosContext"

const create = (data) => {
    return http.post("/deliveries/", data)
    }
const getAll = () => {
    return http.get("/deliveries/")
    }
const update = (id, data) => {
    return http.put(`/deliveries/${id}`, data)
    }
const deleteOne = (id) => {
    return http.delete(`/deliveries/${id}`)
    }
const getOne = (id) => {
    return http.get(`/deliveries/${id}`)
    }
export default {
    create,deleteOne,getAll,update,getOne
    }