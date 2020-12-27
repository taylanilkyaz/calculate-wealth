import { addUserRequest } from "../../services/use-auth-service";
import { useState, useCallback } from "react";
import { notifySuccess, notifyError } from "../../../layout/Notification";

export const useSignUpController = () => {
  const [userState, setUserState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const changeHandler = useCallback(
    (e) => {
      setUserState({ ...userState, [e.target.name]: e.target.value });
    },
    [userState],
  );

  const registerUser = useCallback(
    (event) => {
      event.preventDefault();
      addUserRequest(userState)
        .then(() => {
          notifySuccess("User has been added");
        })
        .catch(() => {
          notifyError("User couldn't be added!");
        });
    },
    [userState],
  );

  return {
    userState,
    changeHandler,
    registerUser,
  };
};