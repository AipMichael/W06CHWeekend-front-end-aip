import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../redux/actions/actionCreators";
import { userLoginThunk } from "../redux/thunks/userThunks";

const useUser = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const userLogin = (user) => {
    console.log(user, "juk 10");
    dispatch(userLoginThunk(user));
  };

  const userLogout = () => {
    dispatch(userLogoutAction());
  };

  return { user, userLogin, userLogout };
};

export default useUser;
