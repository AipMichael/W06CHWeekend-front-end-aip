import useUser from "../../hooks/useUser";

import "./logOut.css";

const Logout = () => {
  const { userLogout } = useUser();

  const onLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE);
    userLogout();
  };

  return (
    <button className="btn btn-primary mylogout" onClick={onLogout}>
      Logout
    </button>
  );
};

export default Logout;
