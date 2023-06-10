import "./PlantsNew.css";
export function PlantsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePlant(params, () => event.target.reset());
  };

  return (
    <div id="new-plant" className="container">
      <h1>New Plant</h1>
      <form onSubmit={handleSubmit} className="plant-form">
        <div className="form-group">
          <label>Name:</label>
          <input name="name" type="text" className="form-input" />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input name="description" type="text" className="form-input" />
        </div>
        <div className="form-group">
          <label>Amount of Sun:</label>
          <input name="amount_of_sun" type="text" className="form-input" />
        </div>
        <div className="form-group">
          <label>Days to Water:</label>
          <input name="days_to_water" type="text" className="form-input" />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input name="image_url" type="text" className="form-input" />
        </div>
        <button type="submit" className="submit-button">Create Plant</button>
      </form>
    </div>
  );
  
}