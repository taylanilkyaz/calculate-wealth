import React, { useState } from "react";
import UserForm from "../../ui/UserForm";

export const SignUp = () => {
  return (
    <div>
      <UserForm
        firstName={userState.firstName}
        lastName={userState.lastName}
        email={userState.email}
        password={userState.password}
        onChange={changeHandler}
        onSubmitUser={registerUser}
      />
    </div>
  );
};
