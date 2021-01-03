import React from "react";
import { WealthForm } from "../../ui/form";
import { useEditWealthController } from "../../controllers/use-edit-wealth-controller";

export const EditWealth = () => {
  const { userState, changeHandler, updateUser } = useEditWealthController();
  return (
    <div>
      <WealthForm
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
