import { loadRobotsAction, createRobotAction } from "../actions/actionCreators";
import axios from "axios";
import dotenv from "dotenv";

const myApi = `https://aip-am-a-robot.herokuapp.com/robots/create?token=${process.env.TOKEN}`;

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const { data: robots } = await axios.get(myApi);
    dispatch(loadRobotsAction(robots));
  };
};

export const createRobotThunk = (robot) => {
  return async (dispatch) => {
    const { data: newRobot } = await axios.post(myApi, robot);
    dispatch(createRobotAction(newRobot));
  };
};
