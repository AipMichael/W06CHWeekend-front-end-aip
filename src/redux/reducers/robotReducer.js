import actionTypes from "../actions/actionTypes";

const robotReducer = (robots = [], action) => {
  let newRobots;

  switch (action.type) {
    case actionTypes.loadRobots:
      newRobots = [...action.robots];
      break;
    case actionTypes.createRobot:
      newRobots = [...robots, action.robot];
      break;
    default:
      newRobots = robots;
      break;
  }
  return newRobots;
};

export default robotReducer;
