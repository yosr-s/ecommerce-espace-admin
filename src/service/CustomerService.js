import http from "./axiosContext"

const create = (data) => {
    return http.post("/customers/", data)
    }
const getAll = () => {
    return http.get("/customers/")
    }
const update = (id, data) => {
    return http.put(`/customers/${id}`, data)
    }
const deleteOne = (id) => {
    return http.delete(`/customers/${id}`)
    }
const getOne = (id) => {
    return http.get(`/customers/${id}`)
    }
export default {
    create,deleteOne,getAll,update,getOne
    }