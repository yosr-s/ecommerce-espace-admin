import http from "./axiosContext"

const create = (data) => {
    return http.post("/orders/", data)
    }
const getAll = () => {
    return http.get("/orders/")
    }
const update = (id, data) => {
    return http.put(`/orders/${id}`, data)
    }
const deleteOne = (id) => {
    return http.delete(`/orders/${id}`)
    }
const getOne = (id) => {
    return http.get(`/orders/${id}`)
    }
export default {
    create,deleteOne,getAll,update,getOne
    }