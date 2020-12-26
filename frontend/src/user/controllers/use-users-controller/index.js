import { getUsersRequest, deleteUserRequest } from "../../services/u";
import { notifySuccess, notifyError } from "../../../layout/Notification";

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
    getUsersRequest.then(setUsers);
  }, []);

  return {
    users,
    deleteUser,
  };
};
