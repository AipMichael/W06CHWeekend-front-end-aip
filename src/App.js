import MainList from "./components/MainList";

import "./App.css";
/* import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { userLoginAction } from "./redux/actions/actionCreators"; */
/* import { useDispatch, useSelector } from "react-redux"; */
import LoginForm from "./components/LoginForm/LogInForm";
import useUser from "./hooks/useUser";
import Logout from "./components/logOut/logOut";

function App() {
  const surpriseMe = () => {
    const surprise =
      "Mario: Sé que no te gustan los console.logs, pero ellos gustan de ti. Es por ello que he decidido dedicar unas breves palabras al amor que te profesan y a las buenas aventuras que habéis tenido juntos a través de los años. Por los 'patatas', 'lorenzos' y 'flama' consoleados, por los 'gatitos', 'perretes' y 'perfes' consoleados, y por los muchos otros que vendrán, te deseamos de todo corazón una feliz navidad.";
    console.log(surprise);
  };

  const {
    user: { isAuthenticated },
  } = useUser();

  return (
    <div className="App ">
      <h1 className="main-title">My robots</h1>
      <div className="App__background">
        {isAuthenticated ? (
          <>
            <Logout />

            <MainList />
          </>
        ) : (
          <div className="row justify-content-center">
            <LoginForm />
          </div>
        )}
      </div>
      <footer className="myfooter">
        <button className="surprise" onClick={surpriseMe}>
          Aip was here.
        </button>
      </footer>
    </div>
  );
}

export default App;
