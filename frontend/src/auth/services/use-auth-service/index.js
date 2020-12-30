import axios from "axios";

export const addUserRequest = (user) => axios.post("http://localhost:3001/auth/signUp", user);

export const loginUserRequest = (email, password) => axios.post("http://localhost:3001/auth/login", { email, password }, { withCredentials: true });

export const logoutRequest = () => axios.get("http://localhost:3001/auth/logout", { withCredentials: true });


