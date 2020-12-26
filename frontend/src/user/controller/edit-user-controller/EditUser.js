import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import UserForm from "../../ui/UserForm";
import { getUserRequest, updateUserRequest } from "../../services/UserService";

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
        getUserRequest(id, setUserState);
    }, [id]);


    const updateUser = (event) => {
        event.preventDefault();// It prevent reload page.

        const userToUpdate = {
            firstName: userState.firstName,
            lastName: userState.lastName,
            email: userState.email,
            password: userState.password
        }

        updateUserRequest(id, userToUpdate, setUserState)
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