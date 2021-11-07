const RobotItem = ({ robot }) => {
  return (
    <li>
      <div className="card">
        <img className="card-img-top" src={robot.imageUrl} alt="cute robot" />
        <div className="card-body">
          <h5 className="card-title">{robot.name}</h5>
          <p className="card-text">
            Speed:{robot.specifications.speed}
            Toughness:{robot.specifications.toughness}
          </p>
          <button className="btn btn-primary">Edit</button>
          <button href="#" className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default RobotItem;
