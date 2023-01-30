import http from "./axiosContext";

 /*const config={
   headers:{
        x_access_token:JSON.parse(localStorage.getItem("token"))
    }
}*/

const create = (data) => {
    return http.post("/products/", data)
    }
    const getAll = () => {
        return http.get("/products/")
        }
const update = (id, data) => {
    return http.put(`/products/${id}`, data)
    }
const deleteOne = (id) => {
    return http.delete(`/products/${id}`)
    }
const getOne = (id) => {
    return http.get(`/products/${id}`)
    }


export default {
    create,deleteOne,getAll,update,getOne
    }