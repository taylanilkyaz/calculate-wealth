import axios from "axios";
import { formatResponse } from "../../../util";


const dataFormatterFunctForArray = res => res.map(r => ({
    id: r._id,
    unit: r.unit,
    amount: r.amount,
    userId: r.user
}));

const dataFormatterFunctForObject = res => ({
    id: res._id,
    unit: res.unit,
    amount: res.amount,
    userId: res.user
});

export const getWealthsRequest = (id) =>
    formatResponse(
        axios.get("http://localhost:3001/api/v1/wealths/"),
        dataFormatterFunctForArray
    );
export const addWealthRequest = (wealth) =>
    formatResponse(
        axios.post("http://localhost:3001/api/v1/wealths", wealth),
        dataFormatterFunctForObject
    );
export const updateWealthRequest = (id, wealthState) =>
    formatResponse(
        axios.put(`http://localhost:3001/api/v1/wealths/${id}`, wealthState),
        dataFormatterFunctForObject
    );

export const getWealthsByUserRequest = (userId) =>
    formatResponse(
        axios.get(`http://localhost:3001/api/v1/wealths/users/${userId}`),
        dataFormatterFunctForArray
    );

export const deleteWealthRequest = (id) => axios.delete(`http://localhost:3001/api/v1/wealths/${id}`);
