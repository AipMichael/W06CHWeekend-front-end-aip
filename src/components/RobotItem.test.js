/* import { render, screen } from "@testing-library/react"; */
import ReactTestRenderer from "react-test-renderer";
import RobotItem from "./RobotItem";

describe("Given a RobotItem component", () => {
  describe("When it receives a robot", () => {
    test.skipp(
      "Then it should render a card with the given robot inside",
      () => {
        const myRobot = {
          _id: 6656516497498516,
          name: "Clockwork Droid",
          imageUrl:
            "https://i.pinimg.com/236x/04/7a/cd/047acd102d3424cd44743e803818f614--halloween-costumes-th-doctor.jpg",
          specifications: {
            speed: 8,
            toughness: 6,
            creationDate: 1800,
          },
        };

        const cardComponent = ReactTestRenderer.create(
          <RobotItem robot={myRobot} key={myRobot._id} />
        );

        expect(cardComponent.toJSON()).toMatchSnapshot();
      }
    );
  });
});
