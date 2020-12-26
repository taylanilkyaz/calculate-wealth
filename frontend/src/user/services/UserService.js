import axios from 'axios';
import { notifySuccess, notifyError } from '../../layout/Notification';

export const getUsersRequest = (setUsers) => {
    axios.get("http://localhost:3001/users")
        .then(response => { setUsers(response.data) });

};

export const deleteUserRequest = (id, onDeleteUserFromState) => {
    axios.delete(`http://localhost:3001/users/${id}`)
        .then(() => {
            notifySuccess("User has been deleted");
            onDeleteUserFromState(id);
        })
        .catch(() => {
            notifyError("User can not deleted.!")
        });
}

export const addUserRequest = (user) => {
    axios.post("http://localhost:3001/auth/signUp", user)
        .then(() => {
            notifySuccess("User has been added");
        })
        .catch(() => {
            notifyError("User couldn't be added!")
        });
}

export const updateUserRequest = (id, user, setUserState) => {
    axios.put(`http://localhost:3001/users/${id}`, user)
        .then(response => {
            const result = {
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email,
                password: response.data.password,
            }
            setUserState(result);
            notifySuccess("User has been updated");
        })
        .catch(() => {
            notifyError("User couldn't be edit!")
        });
}

export const getUserRequest = (id, setUserState) => {
    axios.get(`http://localhost:3001/users/${id}`)
        .then(response => {
            setUserState({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email,
                password: response.data.password,
            });
        });
}