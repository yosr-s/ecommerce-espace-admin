import http from "./axiosContext"

const create = (data) => {
    return http.post("/galleries/", data)
    }
const getAll = () => {
    return http.get("/galleries/")
    }
const update = (id, data) => {
    return http.put(`/galleries/${id}`, data)
    }
const deleteOne = (id) => {
    return http.delete(`/galleries/${id}`)
    }
const getOne = (id) => {
    return http.get(`/galleries/${id}`)
    }
export default {
    create,deleteOne,getAll,update,getOne
    }