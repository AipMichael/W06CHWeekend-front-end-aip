import { useEffect } from "react";
import useRobot from "../hooks";
import RobotItem from "./RobotItem";

const MainList = () => {
  const { robots, loadRobots } = useRobot;

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);
  return (
    <ul>
      {robots.map(({ robot }) => (
        <RobotItem robot={robot} key={robot.id} />
      ))}
      ;
    </ul>
  );
};

export default MainList;
