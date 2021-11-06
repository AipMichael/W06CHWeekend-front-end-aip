import {
  getRandomRobot,
  getRandomRobots,
} from "../../mocks/factories/factories";
import robotReducer from "./robotReducer";
import { loadRobotsAction } from "../actions/actionCreators";

describe("Given a robotReducer reducer", () => {
  describe("When it receives a list of robots and a load action", () => {
    test("Then it should return a new list of robots with the received ones", () => {
      const robotsList = getRandomRobots();

      const newRobotsList = robotReducer(
        robotsList,
        loadRobotsAction(robotsList)
      );

      expect(newRobotsList).toEqual(newRobotsList);
    });
  });
});
