import { addUserRequest } from "./../../services/use-sign-up-service";

export const useSignUpController = () => {
  const [userState, setUserState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // TODO: wrap with useCallback
  const changeHandler = (e) => {
    setUserState({ ...userState, [e.target.name]: e.target.value });
  };

  // TODO: wrap with useCallback
  const registerUser = (event) => {
    event.preventDefault(); // It prevent reload page.
    addUserRequest(userState);
  };

  return {
    userState,
    changeHandler,
    registerUser,
  };
};
