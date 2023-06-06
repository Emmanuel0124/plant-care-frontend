export function PlantsIndex(props) {
  return (
    <div>
      <h1>all Plants</h1>
      {props.plants.map((plant) => (
        <div key={plant.id}>
          <h2>{plant.name} </h2>
          <p>Description: {plant.description}</p>
          <p>Amount of sun: {plant.amount_of_sun}</p>
          <p>Days to water: {plant.days_to_water}</p>
          <button onClick={() => props.onShowPlant(plant)}>More Info</button>
        </div>
      ))}
    </div>
  );
}