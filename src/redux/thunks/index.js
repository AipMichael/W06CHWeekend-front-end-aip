import { loadRobotsAction, createRobotAction } from "../actions/actionCreators";
import axios from "axios";

const myApi = `https://aip-am-a-robot.herokuapp.com/robots`;
const myCreateApi = `https://aip-am-a-robot.herokuapp.com/robots/create?token=${process.env.REACT_APP_TOKEN}`;

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const { token } = JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
    );
    const { data: robots } = await axios.get(myApi + "/", {
      headers: { Authorization: "Bearer " + token },
    });

    dispatch(loadRobotsAction(robots));
  };
};

export const createRobotThunk = (robot) => {
  return async (dispatch) => {
    const { data: newRobot } = await axios.post(myCreateApi, robot);
    dispatch(createRobotAction(newRobot));
  };
};
