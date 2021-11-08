import axios from "axios";
import jwtDecode from "jwt-decode";
import { userLoginAction } from "../actions/actionCreators";

const urlApi = "https://aip-am-a-robot.herokuapp.com/robots";

//falta

export const userLoginThunk = (user) => async (dispatch) => {
  const response = await axios.post(urlApi + "users/login", user);
  if (response.status === 200) {
    const token = response.data.token;
    const user = jwtDecode(token); //instaló npm i jwt-decode
    dispatch(userLoginAction(user));
    localStorage.setItem("pablo", JSON.stringify(token.token));
  }
};
