import axios from "axios";

export const addUserRequest = (user) => axios.post("http://localhost:3001/auth/signUp", user);
