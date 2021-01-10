
import { notifySuccess, notifyError } from "../../../common-components/controllers/use-notification-controller";
import { deleteUserRequest } from "../../services/use-users-service";
import { useCallback } from "react";

export const useDeleteUserController = ({users, setUsers}) => {
    const deleteUser = (event, id) => {
        event.preventDefault(); // It prevent reload page.
        deleteUserRequest(id)
            .then(() => {
                onDeleteUserFromState(id);
                notifySuccess("User has been deleted");
            })
            .catch(() => {
                notifyError("User can not deleted.!");
            });
    };

    const onDeleteUserFromState = useCallback(
        (userId) => {
            const updatedUsers = users.filter((user) => user.id !== userId);
            setUsers(updatedUsers);
        },
        [users, setUsers]
    );

    return {
        deleteUser,
    }

} 