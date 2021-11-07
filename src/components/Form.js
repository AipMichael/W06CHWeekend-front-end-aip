const Form = () => {
  return (
    <form>
      <div className="form-group">
        <label for="name">Nombre</label>
        <input
          type="name"
          className="form-control"
          id="name"
          placeholder="Nombre aquí."
        />
      </div>
      <div className="form-group">
        <label for="speed">Velocidad</label>
        <input
          type="number"
          className="form-control"
          id="speed"
          placeholder="Velocidad aquí."
        />
        <label for="toughness">Resistencia</label>
        <input
          type="number"
          className="form-control"
          id="toughness"
          placeholder="Velocidad aquí."
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Crear
      </button>
    </form>
  );
};

export default Form;
