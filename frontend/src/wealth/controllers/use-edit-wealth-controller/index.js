
import { useCallback } from "react";
import { updateWealthRequest } from "../../services/use-wealth-service";
import { notifySuccess, notifyError } from "../../../common-components/controllers/use-notification-controller";

export const useEditWealthController = (wealths, setWealths) => {

    const editWealth = (id, localWealth) => {
        updateWealthRequest(id, localWealth)
            .then((res) => {
                //setWealthState(res.data);
                onEditWealthFromState(localWealth);
                notifySuccess("Wealth has been edited.");
            })
            .catch((res) => {
                notifyError(res.response.data.msg);
            });
    };

    const onEditWealthFromState = useCallback(
        (wealth) => {
            const index = wealths.findIndex(element => element.id === wealth.id);
            var newArray = wealths.slice();
            newArray[index] = wealth;
            setWealths(newArray);
        },
        [wealths, setWealths]
    );

    return {
        editWealth
    };


}