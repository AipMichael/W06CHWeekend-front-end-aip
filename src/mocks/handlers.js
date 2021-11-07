import { rest } from "msw";
import { getRandomRobots } from "./factories/factories";

export const handlers = [
  rest.get(
    "https://aip-am-a-robot.herokuapp.com/robots",
    async (req, res, ctx) => {
      const robots = res(
        ctx.json([
          {
            _id: 6656516497498516,
            name: "Clockwork Droid",
            imageUrl:
              "https://i.pinimg.com/236x/04/7a/cd/047acd102d3424cd44743e803818f614--halloween-costumes-th-doctor.jpg",
            specifications: {
              speed: 8,
              toughness: 6,
              creationDate: 1800,
            },
          },
          {
            _id: 6656516497498518,
            name: "Emojibot",
            imageUrl: "https://i.ytimg.com/vi/xQE2EmZm8f0/maxresdefault.jpg",
            specifications: {
              speed: 7,
              toughness: 7,
              creationDate: 2018,
            },
          },
        ])
      );
      return robots;
    }
  ),
];
