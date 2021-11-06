import MainList from "./components/MainList";
import { useEffect } from "react";
import "./App.css";
import useRobot from "./hooks/useRobot";

function App() {
  const { loadRobots } = useRobot();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return (
    <div className="App">
      <MainList />
    </div>
  );
}

export default App;
