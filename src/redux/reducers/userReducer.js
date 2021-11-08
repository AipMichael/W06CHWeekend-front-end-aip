import actionTypes from "../actions/actionTypes";

const userReducer = (
  user = {
    isAuthentidated: false,
    user: {},
  },
  action
) => {
  let newUser;

  switch (action.type) {
    case actionTypes.userLogin:
      newUser = {
        isAuthentidated: true,
        user: action.user,
      };
      break;
    case actionTypes.userLogout:
      newUser = {
        isAuthentidated: false,
        user: {},
      };
      break;
    default:
      newUser = user;
  }
  return newUser;
};

export default userReducer;
