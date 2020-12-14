import React, { Component } from 'react'
import User from './User';
import UserConsumer from '../../context';

class Users extends Component {
    render() {

        return (
            <UserConsumer>
                {
                    value => {
                        const { users } = value;
                        return (
                            <div>
                                {
                                    users.map(user => {
                                        return (
                                            <User
                                                key={user._id}
                                                id={user._id}
                                                firstName={user.firstName}
                                                lastName={user.lastName}
                                                email={user.email}
                                                password={user.password}

                                            />
                                        )
                                    })
                                }
                            </div>
                        )

                    }
                }
            </UserConsumer>
        )
    }
}

export default Users;