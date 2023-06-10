export function PlantsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePlant(params, () => event.target.reset());
  };

 return (
  <div>
    <h1>New Plant</h1>
    <form onSubmit={handleSubmit}>
      <div>
        name: <input name="name" type="text" />
      </div>
      <div>
        description: <input name="description" type="text" />
      </div>
      <div>
        amount of sun: <input name="amount_of_sun" type="text" />
      </div>
      <div>
        days to water: <input name="days_to_water" type="text" />
      </div>
      <div>
        image url: <input name="image_url" type="text" />
      </div>
      <button type="submit">Create Plant</button>
    </form>
  </div>
 );
}