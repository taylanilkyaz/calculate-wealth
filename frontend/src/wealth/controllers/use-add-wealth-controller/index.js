import { useCallback, useContext } from "react";
import { addWealthRequest } from "../../services/use-wealth-service";
import { notifySuccess, notifyError } from "../../../common-components/controllers/use-notification-controller";
import UserContext from "../../../context";

export const useAddWealthController = (wealths, setWealths, wealthState, setWealthState) => {

    const { userData } = useContext(UserContext);

    const addWealth = (event) => {
        // event.preventDefault();
        addWealthRequest(wealthState)
            .then((res) => {
                setWealthState({
                    unit: "",
                    amount: "",
                    userId: userData.user.id,
                });
                onAddWealthFromState(res.data);
                notifySuccess("Wealth has been added.");
            })
            .catch((res) => {
                notifyError(res.response.data.msg);
            });
    };

    const onAddWealthFromState = useCallback(
        (wealth) => {
            var newArray = wealths.concat([wealth]);
            setWealths(newArray);
        },
        [wealths, setWealths]
    );

    return {
        addWealth
    };
}