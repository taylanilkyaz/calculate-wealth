import axios from "axios";
import { notifySuccess, notifyError } from "../../layout/Notification";

export const getUsersRequest = () => axios.get("http://localhost:3001/users");

export const deleteUserRequest = (id) =>
  axios.delete(`http://localhost:3001/users/${id}`);

export const updateUserRequest = (id, user, setUserState) => {
  axios
    .put(`http://localhost:3001/users/${id}`, user)
    .then((response) => {
      const result = {
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
        password: response.data.password,
      };
      setUserState(result);
      notifySuccess("User has been updated");
    })
    .catch(() => {
      notifyError("User couldn't be edit!");
    });
};

export const getUserRequest = (id, setUserState) => {
  axios.get(`http://localhost:3001/users/${id}`).then((response) => {
    setUserState({
      firstName: response.data.firstName,
      lastName: response.data.lastName,
      email: response.data.email,
      password: response.data.password,
    });
  });
};
