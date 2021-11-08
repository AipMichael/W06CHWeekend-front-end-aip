import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../redux/actions/actionCreators";
import { userLoginThunk } from "../redux/thunks/userThunks";

const useUser = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const userLogin = () => {
    dispatch(userLoginThunk(user));
  };

  const userLogout = () => {
    dispatch(userLogoutAction());
  };

  return { user, userLogin };
};

export default useUser;
