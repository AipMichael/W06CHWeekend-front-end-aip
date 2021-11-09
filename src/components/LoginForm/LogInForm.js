import { useState } from "react";
import useUser from "../../hooks/useUser";

const LogInForm = () => {
  const { userLogin } = useUser();

  const initialUser = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUser);

  const changeUserData = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    userLogin(userData);
  };

  return (
    <div className="col-4 form-container d-flex justify-content-center">
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        noValidate
        className="login-form"
      >
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
            value={userData.password}
            onChange={changeUserData}
          />
        </div>
        <button type="submit" className="btn btn-primary m-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LogInForm;
