import React from "react";
import { UserForm } from "../../ui/form";
import { useEditUserController } from "../../controllers/use-edit-user-controller";

export const EditUser = () => {
  const { userState, changeHandler, updateUser } = useEditUserController();
  return (
    <div>
      <UserForm
        firstName={userState.firstName}
        lastName={userState.lastName}
        email={userState.email}
        password={userState.password}
        onChange={changeHandler}
        onSubmitUser={updateUser}
      />
    </div>
  );
};
