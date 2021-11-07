import "./RobotItem.css";

const RobotItem = ({ robot }) => {
  const actionOnClick = () => {};
  const actionOnEdit = () => {};

  return (
    <li className="col-4">
      <div className="card">
        <img
          className="card-img-top robot-picture"
          src={robot.imageUrl}
          alt="cute robot"
          height="200"
        />
        <div className="card-body">
          <h5 className="card-title">{robot.name}</h5>
          <p className="card-text">Speed: {robot.specifications.speed}</p>
          <p className="card-text">
            Toughness: {robot.specifications.toughness}
          </p>
          <button onClick={actionOnEdit} className="btn btn-primary">
            Edit
          </button>
          <button onClick={actionOnClick} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default RobotItem;
