import http from "./axiosContext"

const create = (data) => {
    return http.post("/subcategories/", data)
    }
const getAll = () => {
    return http.get("/subcategories/")
    }
const update = (id, data) => {
    return http.put(`/subcategories/${id}`, data)
    }
const deleteOne = (id) => {
    return http.delete(`/subcategories/${id}`)
    }
const getOne = (id) => {
    return http.get(`/subcategories/${id}`)
    }
export default {
    create,deleteOne,getAll,update,getOne
    }