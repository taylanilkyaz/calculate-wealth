import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from '../../context';
import axios from "axios";

const Animation = posed.div({
    visible: {
        opacity: 1,
        applyAtStart: {
            display: "block"
        }
    },
    hidden: {
        opacity: 0,
        applyAtEnd: {
            display: "none"
        }
    },
});

class AddUser extends Component {

    state = {
        visible: true,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        error: false
    }

    changeVisibility = () => {
        this.setState({ visible: !this.state.visible });
    }

    validateForm = () => {
        const { firstName, lastName, email, password } = this.state;
        if (firstName === "" || lastName === "" || email === "" || password === "") {
            return false;
        }
        return true;
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addUser = async (dispatch, event) => {
        event.preventDefault();// It prevent reload page.
        const { firstName, lastName, email, password } = this.state;
        const newUser = {
            firstName,
            lastName,
            email,
            password
        }
        if (!this.validateForm()) {
            this.setState({ error: true });
            return;
        }
        // Send a POST request
        const addedUser = await axios.post("http://localhost:3001/auth/register", newUser);
        dispatch({ type: "ADD_USER", payload: addedUser.data.user });
    }

    render() {
        const { visible, firstName, lastName, email, password, error } = this.state;

        return (
            <UserConsumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="col-md-8 mb-4">
                            <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button>
                            <Animation pose={visible ? "visible" : "hidden"}>
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Add User Form</h4>
                                    </div>
                                    <div className="card-body">
                                        {
                                            error ?
                                                <div className="alert alert-danger">
                                                    Lütfen bilgilerinizi kontrol edin.
                                                 </div>
                                                : null
                                        }
                                        <form onSubmit={this.addUser.bind(this, dispatch)}>
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
                                            <button className="btn btn-danger btn-block" type="submit">Add User</button>
                                        </form>
                                    </div>
                                </div>
                            </Animation>
                        </div >
                    )
                }}
            </UserConsumer>
        )



    }
}
export default AddUser;