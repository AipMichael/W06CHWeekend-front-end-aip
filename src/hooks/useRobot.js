import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRobotsThunk, createRobotThunk } from "../redux/thunks";

const useRobot = () => {
  const robots = useSelector(({ robots }) => robots); //store estaba asi: (store)=> store.robots
  const dispatch = useDispatch();

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  const createRobot = useCallback(
    (robot) => {
      dispatch(createRobotThunk(robot));
    },
    [dispatch]
  );

  return { robots, loadRobots, createRobot };
};

export default useRobot;
