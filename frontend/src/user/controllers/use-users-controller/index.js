import { getUsersRequest, deleteUserRequest } from "../../services/use-users-service";
import { notifySuccess, notifyError } from "../../../layout/Notification";
import { useState, useCallback, useEffect } from "react";

export const useUsersController = () => {
  const [users, setUsers] = useState([]);

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
      const updatedUsers = users.filter((user) => user._id !== userId);
      setUsers(updatedUsers);
    },
    [users]
  );

  useEffect(() => {
    getUsersRequest().then(res => {
      setUsers(res.data);
    });
  }, []);

  return {
    users,
    deleteUser,
  };
};
