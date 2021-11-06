import { getRandomRobot, getRandomRobots } from "../mocks/factories/factories";
import { loadRobotsAction } from "./actionCreators";
import actionTypes from "./actionTypes";

describe("Given a loadTaskAction creator", () => {
  describe("When it receives an actionType and a list of tasks", () => {
    test("Then it should return an object including the type and the tasks given", () => {
      const robotsList = getRandomRobots();
      const expectedAction = {
        type: actionTypes.loadRobots,
        robots: robotsList,
      };

      const resultedAction = loadRobotsAction(robotsList);

      expect(resultedAction).toEqual(expectedAction);
    });
  });
});
