import { useHistory } from "react-router-dom";
import UserContext from "../../../context"
import { logoutRequest } from "../../../auth/services/use-auth-service"
import { useContext } from "react";

export const useNavbarController = () => {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    const logout = () => logoutRequest().then((res) => {
        setUserData({
            token: undefined,
            user: undefined,
        });
        history.push("/");
    });
    return {
        userData,
        logout
    }
}