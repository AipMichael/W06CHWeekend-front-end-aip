import { render, screen } from "@testing-library/react";
import ReactTestRenderer from "react-test-renderer";
import RobotItem from "./RobotItem";
import { getRandomRobot } from "../mocks/factories/factories";

describe("Given a RobotItem component", () => {
  describe("When it receives a robot", () => {
    test("Then it should render a card with the given robot inside", () => {
      const myRobot = getRandomRobot();

      const cardComponent = ReactTestRenderer.create(
        <RobotItem robot={myRobot} key={myRobot._id} />
      );

      expect(cardComponent.toJSON()).toMatchSnapshot();
    });
  });
});
