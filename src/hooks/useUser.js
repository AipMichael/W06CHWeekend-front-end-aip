import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoginThunk } from "../redux/thunks/userThunks";

const useUser = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const userLogin = () => {
    dispatch(userLoginThunk());
  };

  return userLogin;
};
