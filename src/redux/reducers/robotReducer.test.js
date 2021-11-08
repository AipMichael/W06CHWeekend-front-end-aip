import {
  getRandomRobot,
  getRandomRobots,
} from "../../mocks/factories/factories";
import robotsReducer from "./robotsReducer";
import { loadRobotsAction } from "../actions/actionCreators";

describe("Given a robotsReducer reducer", () => {
  describe("When it receives a list of robots and a load action", () => {
    test("Then it should return a new list of robots with the received ones", () => {
      const robotsList = getRandomRobots();

      const newRobotsList = robotsReducer(
        robotsList,
        loadRobotsAction(robotsList)
      );

      expect(newRobotsList).toEqual(newRobotsList);
    });
  });
});
