import MainList from "./components/MainList";
import { useEffect } from "react";
import "./App.css";
import useRobot from "./hooks/useRobot";

function App() {
  return (
    <div className="App">
      <h1 className="main-title">My robots</h1>
      <MainList />
    </div>
  );
}

export default App;
