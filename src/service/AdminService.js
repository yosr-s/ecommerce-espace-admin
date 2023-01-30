import http from "./axiosContext";

const create = (data) => {
  return http.post("/admins/", data )
};
const getAll = () => {

  return http.get("/admins/");
};
const update = (id, data) => {
  return http.put(`/admins/${id}`, data);
};
const deleteOne = (id) => {
  return http.delete(`/admins/${id}`);
};
const getOne = (id) => {
  return http.get(`/admins/${id}`);
};
export default {
  create,
  deleteOne,
  getAll,
  update,
  getOne,
};
