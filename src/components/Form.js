import { useState } from "react";
import useRobot from "../hooks/useRobot";

const Form = () => {
  const initialRobot = {
    name: "",
    imageUrl: "",
    specifications: {
      speed: "",
      resistance: "",
      yearCreation: "",
    },
  };

  const [robot, setRobot] = useState(initialRobot);

  const resetForm = () => {
    setRobot(initialRobot);
  };

  const { createRobot } = useRobot();

  const changeRobot = (event) => {
    setRobot({
      ...robot,
      [event.target.id]: event.target.value,
    });
  };

  const sendRobot = (event) => {
    event.preventDefault();
    const newRobot = {
      ...robot,
      imageUrl:
        robot.imageUrl !== ""
          ? robot.imageUrl
          : "https://i.ibb.co/SNXHyvh/marioandroid.png",
    };
    createRobot(newRobot);
    resetForm();
  };

  return (
    <>
      <h2>Crea tu robot:</h2>
      <form autoComplete="off" noValidate onSubmit={sendRobot}>
        <div className="form-group">
          <label for="name">Nombre</label>
          <input
            type="name"
            className="form-control"
            id="name"
            value={robot.name}
            onChange={changeRobot}
            required
            placeholder="Nombre aquí."
          />
        </div>
        <div className="form-group">
          <label for="imageUrl">Velocidad</label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            placeholder="https://myimage.png"
            value={robot.imageUrl}
            onChange={changeRobot}
          />
        </div>
        <div className="form-group">
          <label for="speed">Velocidad</label>
          <input
            type="number"
            className="form-control"
            id="speed"
            min="0"
            max="10"
            value={robot.specifications.speed}
            onChange={changeRobot}
            placeholder="Velocidad aquí."
          />
          <label for="toughness">Resistencia</label>
          <input
            type="number"
            className="form-control"
            min="0"
            max="10"
            value={robot.specifications.toughness}
            onChange={changeRobot}
            id="toughness"
            placeholder="Velocidad aquí."
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Crear
        </button>
      </form>
    </>
  );
};

export default Form;
