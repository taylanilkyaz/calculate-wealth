import React, { useState } from 'react';
import UserForm from "../../ui/UserForm";
import { addUserRequest } from "../../services/UserService";

const SignUp = () => {

    const [userState, setUserState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const changeHandler = e => {
        setUserState({ ...userState, [e.target.name]: e.target.value })
    }

    const registerUser = (event) => {
        event.preventDefault();// It prevent reload page.
        const newUser = {
            firstName: userState.firstName,
            lastName: userState.lastName,
            email: userState.email,
            password: userState.password
        }
        addUserRequest(newUser);
    }

    return (
        <div>

            <UserForm
                firstName={userState.firstName}
                lastName={userState.lastName}
                email={userState.email}
                password={userState.password}
                onChange={changeHandler}
                onSubmitUser={registerUser}
            />

        </div>

    );
}

export default SignUp;