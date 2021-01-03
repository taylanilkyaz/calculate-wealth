import axios from "axios";
import { formatResponse } from "../../../util";

const dataFormatterFunct = res => {
    const deleteId = res._id;
    delete res._id;
    return { user: { id: deleteId, ...res } }
}

export const addUserRequest = (user) =>
    formatResponse(
        axios.post("http://localhost:3001/api/v1/auth/signUp", user),
        dataFormatterFunct
    );
export const loginUserRequest = (email, password) =>
    formatResponse(
        axios.post("http://localhost:3001/api/v1/auth/login", { email, password }, { withCredentials: true }),
        dataFormatterFunct
    );

export const tokenIsValidRequest = () =>
    formatResponse(
        axios.get("http://localhost:3001/api/v1/auth/tokenIsValid", { withCredentials: true }),
        dataFormatterFunct
    );

export const logoutRequest = () => axios.get("http://localhost:3001/api/v1/auth/logout", { withCredentials: true });

