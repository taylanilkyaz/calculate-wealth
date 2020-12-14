import React, { Component } from 'react';
import PropTypes from "prop-types";
import UserConsumer from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";

class User extends Component {
    state = { isVisible: false };

    onClickEvent = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    onDeleteUser = async (dispatch, e) => {
        const { id } = this.props;
        //Delete Request
        await axios.delete(`http://localhost:3001/users/${id}`);
        //Consumer dispatch
        dispatch({ type: "DELETE_USER", payload: id });
    }
    render() {

        //Destructing
        const { id, firstName, lastName, email, password } = this.props;
        const { isVisible } = this.state;

        return (
            <UserConsumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div>

                            <div className="col-md-8 mb-4">
                                <div className="card" style={isVisible ? { background: "#62848d", color: "white" } : null}>
                                    <div className="card-header d-flex justify-content-between">
                                        <h4 className="d-inline" onClick={this.onClickEvent}>{firstName} {lastName}</h4>
                                        <i onClick={this.onDeleteUser.bind(this, dispatch)} className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
                                    </div>
                                    {
                                        isVisible ?
                                            <div className="card-body">
                                                <p className="card-text">Email : {email}</p>
                                                <p className="card-text">Password : {password}</p>
                                                <Link to={`edit/${id}`} className="btn btn-dark btn-block">Update User</Link>
                                            </div>
                                            : null
                                    }


                                </div>
                            </div>
                        </div >
                    )

                }}
            </UserConsumer>
        )
    }
}
User.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
}
User.defaultProps = {
    firstName: "Bilgi yok",
    lastName: "Bilgi yok",
    email: "Bilgi yok",
    password: "Bilgi yok"
}


export default User;