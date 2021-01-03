import { useState, useCallback, useContext } from "react";
import { addWealthRequest } from "../../services/use-wealth-service";
import { notifySuccess, notifyError } from "../../../common-components/controllers/use-notification-controller";
import UserContext from "../../../context";

export const useAddWealthController = () => {

    const { userData } = useContext(UserContext);
    const [wealthState, setWealthState] = useState({
        unit: "",
        amount: "",
        userId: userData.user.id,
    });

    const changeHandler = useCallback((e) => {
        setWealthState({ ...wealthState, [e.target.name]: e.target.value });
    }, [wealthState]);

    const addWealth = useCallback((event) => {
        // event.preventDefault();
        addWealthRequest(wealthState)
            .then(() => {
                notifySuccess("Wealth has been added.");
            })
            .catch((res) => {
                notifyError(res.response.data.msg);
            });
    }, [wealthState]);
    
    return {
        wealthState,
        changeHandler,
        addWealth
    };
}