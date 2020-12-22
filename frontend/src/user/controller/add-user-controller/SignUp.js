import React, { useState } from 'react';
import UserForm from "../../ui/UserForm";
import axios from "axios";

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

        axios.post("http://localhost:3001/auth/signUp", newUser)
            .then(res => res.status(200).json({ message: 'User added successfull' }));
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