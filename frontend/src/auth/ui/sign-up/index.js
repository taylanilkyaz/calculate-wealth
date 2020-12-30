import { UserForm } from "../../../user/ui/form";
import { useSignUpController } from "../../controllers/use-sign-up-controller"

export const SignUp = () => {
  const { userState, changeHandler, registerUser } = useSignUpController();
  return (
    <div>
      <UserForm
        firstName={userState.firstName}
        lastName={userState.lastName}
        email={userState.email}
        password={userState.password}
        passwordCheck={userState.passwordCheck}
        onChange={changeHandler}
        onSubmitUser={registerUser}
      />
    </div>
  );
};
