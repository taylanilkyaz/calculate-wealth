export const useEditUserController = () => {
  const { id } = useParams();
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

  // TODO will change,
  // then will be handled here not in the service
  useEffect(() => {
    getUserRequest(id, setUserState);
  }, [id]);

  // TODO wrap with useCallback
  const updateUser = (event) => {
    event.preventDefault(); // It prevent reload page.

    const userToUpdate = {
      firstName: userState.firstName,
      lastName: userState.lastName,
      email: userState.email,
      password: userState.password,
    };

    // then will be handled here not in the service
    updateUserRequest(id, userToUpdate, setUserState);
  };

  return {
    userState,
    changeHandler,
    updateUser,
  };
};
