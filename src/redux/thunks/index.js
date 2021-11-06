import { loadRobotsAction } from "../actions/actionCreators";

export const loadRobotsThunk = () => async (dispatch) => {
  const response = await fetch("https://todo-aip-api.herokuapp.com/list/");

  const robots = await response.json();
  dispatch(loadRobotsAction(robots));
};
