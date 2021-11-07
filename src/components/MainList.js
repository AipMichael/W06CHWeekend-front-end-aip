import useRobot from "../hooks/useRobot";
import RobotItem from "./RobotItem";
import "./MainList.css";

const MainList = () => {
  const { robots } = useRobot();

  return (
    <ul className="robot-list row">
      {robots.map((robot) => (
        <RobotItem robot={robot} key={robot._id} />
      ))}
    </ul>
  );
};

export default MainList;
