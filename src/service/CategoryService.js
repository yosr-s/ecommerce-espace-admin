import http from "./axiosContext"

const create = (data) => {
    return http.post("/categories/", data)
    }
const getAll = () => {
    return http.get("/categories/")
    }
const update = (id, data) => {
    return http.put(`/categories/${id}`, data)
    }
const deleteOne = (id) => {
    return http.delete(`/categories/${id}`)
    }
const getOne = (id) => {
    return http.get(`/categories/${id}`)
    }
export default {
    create,deleteOne,getAll,update,getOne
    }