import axios from "axios";

export const getUsersRequest = () => axios.get("http://localhost:3001/users");

export const deleteUserRequest = (id) => axios.delete(`http://localhost:3001/users/${id}`);

export const getUserRequest = (id) => axios.get(`http://localhost:3001/users/${id}`);

export const updateUserRequest = (id, userState) =>axios.put(`http://localhost:3001/users/${id}`, userState);