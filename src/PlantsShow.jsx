export function PlantsShow(props) {
  return (
    <div>
      <h1>Plant infromation</h1>
      <p>name: {props.plant.name} </p>
      <p>description: {props.plant.description} </p>
      <p>amount of sun: {props.plant.amount_of_sun} </p>
      <p>days to water: {props.plant.days_to_water} </p>
    </div>
  )
}