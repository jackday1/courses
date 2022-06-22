import axios from "axios";

const api = axios.create({
  baseURL: "https://62aeffbbb735b6d16a4abc21.mockapi.io/api/v1/todos",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = () => api.get("/");

export const create = (todo) => api.post("/", todo);

export const update = (id, todo) => api.put(`/${id}`, todo);

export const remove = (id) => api.delete(`/${id}`);
