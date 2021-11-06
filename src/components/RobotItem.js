const RobotItem = ({ robot }) => {
  return (
    <li>
      {robot.name}
      <button className="robots__edit" onClick={() => {}}>
        Edit robot
      </button>
      <button className="robots__delete">Delete robot</button>
    </li>
  );
};

export default RobotItem;
