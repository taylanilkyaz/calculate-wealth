import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import UserForm from "../../ui/UserForm";
import axios from "axios";

const EditUser = () => {

    const { id } = useParams();
    const [userState, setUserState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const changeHandler = e => {
        setUserState({ ...userState, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/users/${id}`)
            .then(response => {

                const result = {
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    email: response.data.email,
                    password: response.data.password,
                }
                setUserState(result);
            });
    }, []);


    const updateUser = (event) => {
        event.preventDefault();// It prevent reload page.

        const userToUpdate = {
            firstName: userState.firstName,
            lastName: userState.lastName,
            email: userState.email,
            password: userState.password
        }

        axios.put(`http://localhost:3001/users/${id}`, userToUpdate)
            .then(response => {
                const result = {
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    email: response.data.email,
                    password: response.data.password,
                }
                setUserState(result);
            });
    }

    return (
        <div>
            <UserForm
                firstName={userState.firstName}
                lastName={userState.lastName}
                email={userState.email}
                password={userState.password}
                onChange={changeHandler}
                onSubmitUser={updateUser}
            />

        </div>

    );
}

export default EditUser;