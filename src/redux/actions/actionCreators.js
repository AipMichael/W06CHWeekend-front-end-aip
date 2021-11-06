import actionTypes from "./actionTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
  console.log("hola");
});
