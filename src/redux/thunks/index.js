import { loadRobotsAction } from "../actions/actionCreators";

export const loadRobotsThunk = () => async (dispatch) => {
  const response = await fetch("https://aip-am-a-robot.herokuapp.com/robots");

  const robots = await response.json();
  console.log(robots);
  dispatch(loadRobotsAction(robots));
};
