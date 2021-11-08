import MainList from "./components/MainList";

import "./App.css";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { userLoginAction } from "./redux/actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const surpriseMe = () => {
    const surprise =
      "Mario: Sé que no te gustan los console.logs, pero ellos gustan de ti. Es por ello que he decidido dedicar unas breves palabras al amor que te profesan y a las buenas aventuras que habéis tenido juntos a través de los años. Por los 'patatas', 'lorenzos' y 'flama' consoleados, por los 'gatitos', 'perretes' y 'perfes' consoleados, y por los muchos otros que vendrán, te deseamos de todo corazón una feliz navidad.";
    console.log(surprise);
  };

  const { isAuthenticated } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("pablo"));
    if (token) {
      dispatch(userLoginAction(jwtDecode(token.token)));
    }
  }, []);

  return (
    <div className="App">
      <h1 className="main-title">My robots</h1>
      <MainList />
      <footer className="myfooter">
        <button className="surprise" onClick={surpriseMe}>
          Aip was here.
        </button>
      </footer>
    </div>
  );
}

export default App;
