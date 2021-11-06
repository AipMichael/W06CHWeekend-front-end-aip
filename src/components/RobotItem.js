const RobotItem = ({ robot }) => {
  return (
    <li>
      <input type="checkbox" />
      {robot}
      <button className="robots__edit" onClick={() => {}}>
        Edit robot
      </button>
      <button className="robots__delete">Delete robot</button>
    </li>
  );
};

export default RobotItem;
