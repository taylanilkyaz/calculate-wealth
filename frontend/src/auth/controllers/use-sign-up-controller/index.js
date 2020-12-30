import { addUserRequest } from "../../services/use-auth-service";
import { useState, useCallback } from "react";
import { notifySuccess, notifyError } from "../../../common-components/controller/use-notification-controller";

export const useSignUpController = () => {

  const [userState, setUserState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordCheck: ""
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
          notifySuccess("User has been added.");
        })
        .catch((res) => {
          notifyError(res.response.data.msg);
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
