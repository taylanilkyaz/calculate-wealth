import { useParams } from "react-router-dom"
import { useState, useEffect, useCallback } from "react";
import { getUserRequest, updateUserRequest } from "../../services/use-users-service";
import { notifySuccess, notifyError } from "../../../common-components/controllers/use-notification-controller";

export const useEditUserController = () => {
  const { id } = useParams();
  const [userState, setUserState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const changeHandler = useCallback(
    (e) => {
      setUserState({ ...userState, [e.target.name]: e.target.value });
    }, [userState])

  useEffect(() => {
    getUserRequest(id)
      .then((response) => {
        setUserState(response.data);
      });
  }, [id]);

  const updateUser = useCallback(
    (event) => {
      event.preventDefault(); // It prevent reload page.

      updateUserRequest(id, userState)
        .then((response) => {
          setUserState(response.data);
          notifySuccess("User has been updated");
        })
        .catch(() => {
          notifyError("User couldn't be edit!");
        });
    },
    [id, userState],
  )

  return {
    userState,
    changeHandler,
    updateUser,
  };
};
