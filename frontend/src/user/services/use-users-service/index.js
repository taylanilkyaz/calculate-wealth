import axios from "axios";
import { formatResponse } from "../../../util";

const dataFormatterFunctForArray = res => res.map(r => ({
    id: r._id,
    firstName: r.firstName,
    lastName: r.lastName,
    email: r.email,
    password: r.password,
    role: r.role
}));

const dataFormatterFunctForObject = res => ({
    id: res._id,
    firstName: res.firstName,
    lastName: res.lastName,
    email: res.email,
    password: res.password,
    role: res.role
});

//It is very good. Delete _id column and add id column. 
// const dataFormatterFunct = res => res.map(r => {
//     const deleteId = r._id;
//     delete r._id;
//     return {id: deleteId, ...r}
// })


// There are either id or _id
// const dataFormatterFunct = res => res.map({id: res._id});


export const getUsersRequest = () =>
    formatResponse(
        axios.get("http://localhost:3001/api/v1/users"),
        dataFormatterFunctForArray
    );

export const deleteUserRequest = id => axios.delete(`http://localhost:3001/api/v1/users/${id}`);


export const getUserRequest = (id) =>
    formatResponse(
        axios.get(`http://localhost:3001/api/v1/users/${id}`),
        dataFormatterFunctForObject
    );

export const updateUserRequest = (id, userState) =>
    formatResponse(
        axios.put(`http://localhost:3001/api/v1/users/${id}`, userState),
        dataFormatterFunctForObject
    );


