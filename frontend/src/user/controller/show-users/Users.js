import React, { useState, useEffect, useCallback } from 'react';
import UserCard from '../../ui/UserCard';
import Grid from '@material-ui/core/Grid';
import { getUsersRequest, deleteUserRequest } from "../../services/UserService"

const Users = () => {

    const [users, setUsers] = useState([]);

    const deleteUser = (event, id) => {
        event.preventDefault();// It prevent reload page.
        deleteUserRequest(id, onDeleteUserFromState);
    }

    const onDeleteUserFromState = useCallback((userId) => {
        const updatedUsers = users.filter(user => user._id !== userId);
        setUsers(updatedUsers);
    }, [users]);

    useEffect(() => {
        getUsersRequest(setUsers);
    }, []);

    return (
        <div>
            <Grid container style={{ padding: 24, display: 'flex', justifyContent: 'center' }}>
                {users.map(user => (
                    <Grid key={user._id} style={{ margin: 15 }}>
                        <UserCard
                            id={user._id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            email={user.email}
                            password={user.password}
                            deleteUser={deleteUser}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
export default Users;