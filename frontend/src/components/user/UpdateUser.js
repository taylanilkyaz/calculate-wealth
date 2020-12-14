import React, { Component } from 'react'
import UserConsumer from '../../context';
import axios from "axios";

class UpdateUser extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        error: false
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validateForm = () => {
        const { firstName, lastName, email, password } = this.state;
        if (firstName === "" || lastName === "" || email === "" || password === "") {
            return false;
        }
        return true;
    }

    updateUser = async (dispatch, event) => {
        event.preventDefault();// It prevent reload page.
        const { firstName, lastName, email, password } = this.state;
        const { id } = this.props.match.params;
        const userToUpdate = {
            firstName,
            lastName,
            email,
            password
        }

        if (!this.validateForm()) {
            this.setState({ error: true });
            return;
        }
        const updatedUser = await axios.put(`http://localhost:3001/users/${id}`, userToUpdate);
        dispatch({ type: "UPDATE_USER", payload: updatedUser.data });


    }

    componentDidMount = async () => {
        const { id } = this.props.match.params;
        //user requested to be updated.
        const userToUpdate = await axios.get(`http://localhost:3001/users/${id}`);
        const { firstName, lastName, email, password } = userToUpdate.data;
        this.setState({
            firstName,
            lastName,
            email,
            password
        })
    }

    render() {
        const { firstName, lastName, email, password , error} = this.state;

        return (
            <UserConsumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="col-md-8 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Update User Form</h4>
                                </div>
                                <div className="card-body">
                                    {
                                        error ?
                                            <div className="alert alert-danger">
                                                Lütfen bilgilerinizi kontrol edin.
                                                 </div>
                                            : null
                                    }
                                    <form onSubmit={this.updateUser.bind(this, dispatch)}>
                                        <div className="form-group">
                                            <label htmlFor="firstName">FirstName</label>
                                            <input type="text"
                                                name="firstName"
                                                id="firstName"
                                                placeholder="Enter FirstName"
                                                className="form-control"
                                                value={firstName}
                                                onChange={this.changeInput} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lastName">LastName</label>
                                            <input type="text"
                                                name="lastName"
                                                id="lastName"
                                                placeholder="Enter lastName"
                                                className="form-control"
                                                value={lastName}
                                                onChange={this.changeInput} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Enter Email"
                                                className="form-control"
                                                value={email}
                                                onChange={this.changeInput} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password"
                                                name="password"
                                                id="password"
                                                placeholder="Enter Password"
                                                className="form-control"
                                                value={password}
                                                onChange={this.changeInput} />
                                        </div>
                                        <button className="btn btn-danger btn-block" type="submit">Update User</button>
                                    </form>
                                </div>
                            </div>
                        </div >
                    )
                }}
            </UserConsumer>
        )



    }
}
export default UpdateUser;