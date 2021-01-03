
import { deleteWealthRequest } from "../../services/use-wealth-service";
import { notifySuccess, notifyError } from "../../../common-components/controllers/use-notification-controller";
import { useCallback } from "react";


export const useDeleteWealthController = (wealths, setWealths) => {

    const deleteWealth = (event, id) => {
        event.preventDefault(); // It prevent reload page.
        deleteWealthRequest(id)
            .then(() => {
                onDeleteWealthFromState(id);
                notifySuccess("Wealth has been deleted");
            })
            .catch(() => {
                notifyError("Wealth can not deleted.!");
            });
    };

    const onDeleteWealthFromState = useCallback(
        (wealthId) => {
            const updatedWealths = wealths.filter((wealth) => wealth.id !== wealthId);
            setWealths(updatedWealths);
        },
        [wealths, setWealths]
    );

    return {
        deleteWealth
    }
}