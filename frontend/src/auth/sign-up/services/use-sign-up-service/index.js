export const addUserRequest = (user) => {
  axios
    .post("http://localhost:3001/auth/signUp", user)
    .then(() => {
      notifySuccess("User has been added");
    })
    .catch(() => {
      notifyError("User couldn't be added!");
    });
};
