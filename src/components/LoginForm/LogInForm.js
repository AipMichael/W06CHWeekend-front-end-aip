/* import { Navigate } from "react-router"; */
import { useDispatch } from "react-redux";
import { useState } from "react";
import { userLoginThunk } from "../../redux/thunks/userThunks";

const LogInForm = () => {
  const dispatch = useDispatch();
  const initialUser = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUser);

  const changeUserData = (event) => {
    setUserData({
      ...userData,
      [event.terget.id]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(userLoginThunk(userData));
  };

  return (
    <form onSubmit={onSubmit} autoComplete="off" noValidate>
      <div className="form-group text-light">
        <label htmlFor="username">Your username</label>
        <input
          type="username"
          className="form-control"
          id="username"
          placeholder="Enter your username"
          value={userData.username}
          onChange={changeUserData}
        />
      </div>
      <div className="form-group text-light">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={userData.username}
          onChange={changeUserData}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default LogInForm;
