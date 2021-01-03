
import { useState, useCallback, useContext } from "react";
import { updateWealthRequest } from "../../services/use-wealth-service";
import { notifySuccess, notifyError } from "../../../common-components/controllers/use-notification-controller";
import UserContext from "../../../context";

export const useEditWealthController = ({ id, unit, amount }) => {
    const { userData } = useContext(UserContext);

    const [wealthState, setWealthState] = useState({
        unit: unit,
        amount: amount,
        userId: userData.user.id,
    });

    const changeHandler = useCallback((e) => {
        setWealthState({ ...wealthState, [e.target.name]: e.target.value });
    }, [wealthState]);

    const editWealth = useCallback((event) => {
        // event.preventDefault();
        updateWealthRequest(id, wealthState)
            .then((res) => {
                setWealthState(res.data);
                notifySuccess("Wealth has been edited.");
            })
            .catch((res) => {
                notifyError(res.response.data.msg);
            });
    }, [id, wealthState]);

    return {
        wealthState,
        changeHandler,
        editWealth
    };


}