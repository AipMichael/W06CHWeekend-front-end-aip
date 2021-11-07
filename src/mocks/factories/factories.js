import { datatype } from "faker";
import { lorem } from "faker/locale/es";
import { Factory } from "fishery";

const factory = Factory.define(({ sequence }) => ({
  _id: sequence,
  name: lorem.sentence(2),
  imageUrl: datatype.string(1),
  specifications: {
    speed: datatype.number(0, 10),
    toughness: datatype.number(0, 10),
    creationDate: datatype.datetime,
  },
}));

export const getRandomRobot = () => factory.build();
export const getRandomRobots = (count = 3) => factory.buildList(count);
