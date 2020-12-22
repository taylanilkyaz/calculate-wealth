import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";
import UserCard from './UserCard';
import Grid from '@material-ui/core/Grid';

export default function Users() {

    const [users, setUsers] = useState([]);

    const onDeleteUser = useCallback((userId) => {
        console.log({ userId });
        console.log(users);
        const updatedUsers = users.filter(user => user._id !== userId);
        setUsers(updatedUsers);
    }, [users]);

    useEffect(() => {
        console.log("Users... useEffect");
        axios.get("http://localhost:3001/users").then(response => { setUsers(response.data) });
        console.log(users);
    }, []);

    // useEffect(() => {

    //     (async () => {
    //         console.log("sss");
    //         const response = await axios.get("http://localhost:3001/users");
    //         setUsers(response.data);
    //     })();
    // }); //End UseEffect

    return (
        <div>

            <Grid container style={{ padding: 24, display: 'flex', justifyContent: 'center' }}>
                {users.map(user => (
                    <Grid key={user._id} item xs={12} sm={6} lg={4} xl={3} style={{ margin: 15 }}>
                        <UserCard
                            id={user._id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            email={user.email}
                            password={user.password}
                            onDeleteUser={onDeleteUser}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
