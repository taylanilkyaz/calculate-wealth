import { getWealthsByUserRequest } from "../../services/use-wealth-service";
import { useState, useEffect, useContext } from "react";
import { useDeleteWealthController } from "../user-delete-wealth-controller";

import UserContext from "../../../context";

export const useWealthsController = () => {
    const { userData } = useContext(UserContext);

    const [wealths, setWealths] = useState([]);

    const { deleteWealth } = useDeleteWealthController(wealths, setWealths);

    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => {
        setIsOpen(true);
    };

    const closeDialog = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        getWealthsByUserRequest(userData.user.id).then(res => {
            setWealths(res.data);
        });
    }, [userData.user.id]);

    return {
        wealths,
        deleteWealth,
        openDialog,
        closeDialog,
        isOpen
    };
};
