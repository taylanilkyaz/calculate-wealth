import { getUsersRequest } from "../../services/use-users-service";
import { useState, useEffect } from "react";
import { useDeleteUserController } from "../use-delete-user-controller";

export const useUsersController = () => {
  const [users, setUsers] = useState([]);
  const { deleteUser } = useDeleteUserController({users, setUsers});

  useEffect(() => {
    
    getUsersRequest().then(res => {
      setUsers(res.data);
    });
  }, []);

  return {
    users,
    deleteUser
  };
};
