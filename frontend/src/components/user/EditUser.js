import React, { useState, useLayoutEffect } from 'react'
import UserForm from "../../reusable/UserForm"
import axios from "axios";


export default function EditUser(props) {

    const [user, setUser] = useState(null);
    const { id } = props.match.params;
    
    useLayoutEffect(() => {
        console.log(id);
        axios.get(`http://localhost:3001/users/${id}`)
            .then(response => {setUser(response.data)});

    },[]);

    return (
        <div>
            <UserForm user={user}></UserForm>
        </div>
    )
}
