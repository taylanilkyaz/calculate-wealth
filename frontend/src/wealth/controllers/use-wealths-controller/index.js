import { getWealthsByUserRequest } from "../../services/use-wealth-service";
import { useState, useEffect, useContext, useCallback } from "react";

import UserContext from "../../../context";

import { useDeleteWealthController } from "../user-delete-wealth-controller";
import { useAddWealthController } from "../use-add-wealth-controller";
import { useEditWealthController } from "../use-edit-wealth-controller";

export const useWealthsController = (id, unit, amount) => {
    const { userData } = useContext(UserContext);

    const [wealths, setWealths] = useState([]);

    const [wealthState, setWealthState] = useState({
        id: id,
        unit: unit,
        amount: amount,
        userId: userData.user.id,
    });

    const changeHandler = useCallback((e) => {
        setWealthState({ ...wealthState, [e.target.name]: e.target.value });
    }, [wealthState]);

    const { deleteWealth } = useDeleteWealthController(wealths, setWealths);
    const { addWealth } = useAddWealthController(wealths, setWealths, wealthState, setWealthState);
    const { editWealth } = useEditWealthController(wealths, setWealths, wealthState, setWealthState);

    useEffect(() => {
        getWealthsByUserRequest(userData.user.id).then(res => {
            setWealths(res.data);
        });
    }, [userData.user.id]);

    return {
        wealths,
        deleteWealth,
        wealthState,
        changeHandler,
        addWealth,
        editWealth
    };
};
