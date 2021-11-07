import { render, screen, waitFor } from "@testing-library/react";
import MainList from "./MainList";
import configureStore from "../redux/store";
import { Provider } from "react-redux";
import { server } from "../mocks/server";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given a MainList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the names of the Robots loaded", async () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <MainList />
        </Provider>
      );

      const myRobotName = await screen.findByText("Clockwork Droid");
      await waitFor(() => {
        expect(myRobotName).toBeInTheDocument();
      });
    });
  });
});
