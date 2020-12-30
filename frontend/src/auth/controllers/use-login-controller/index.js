import { useState, useCallback, useContext } from "react";
import { loginUserRequest } from "../../services/use-auth-service";
import UserContext from "../../../context";
import { useHistory } from "react-router-dom";


export const useLoginController = () => {
    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const changeHandler = useCallback(
        (e) => {
            setUser({ ...user, [e.target.name]: e.target.value });
        },
        [user],
    );

    const loginUser = (event) => {
        event.preventDefault();
        loginUserRequest(user.email, user.password)
            .then((response) => {
                setUserData({
                    user: response.data.user
                });
                history.push("/");
            });
    }

    return {
        user,
        loginUser,
        changeHandler
    };
}