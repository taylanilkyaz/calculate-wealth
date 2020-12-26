import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserForm from "../../ui/UserForm";
import { getUserRequest, updateUserRequest } from "../../services/UserService";

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
