import http from "./axiosContext"

const create = (data) => {
    return http.post("/providers/", data)
    }
const getAll = () => {
    return http.get("/providers/")
    }
const update = (id, data) => {
    return http.put(`/providers/${id}`, data)
    }
const deleteOne = (id) => {
    return http.delete(`/providers/${id}`)
    }
const getOne = (id) => {
    return http.get(`/providers/${id}`)
    }
export default {
    create,deleteOne,getAll,update,getOne
    }