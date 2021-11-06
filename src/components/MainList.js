import useRobot from "../hooks/useRobot";
import RobotItem from "./RobotItem";

const MainList = () => {
  const { robots } = useRobot();
  console.log(robots, "mainlist");

  return (
    <ul>
      {robots.map((robot) => (
        <RobotItem robot={robot} key={robot.id} />
      ))}
    </ul>
  );
};

export default MainList;
