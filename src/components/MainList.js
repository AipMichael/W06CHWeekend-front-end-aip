import useRobot from "../hooks/useRobot";
import RobotItem from "./RobotItem";
import "./MainList.css";
import { useEffect } from "react";

const MainList = () => {
  const { robots, loadRobots } = useRobot();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return (
    <ul className="robot-list row container">
      {robots.map((robot) => (
        <RobotItem robot={robot} key={robot._id} />
      ))}
    </ul>
  );
};

export default MainList;
