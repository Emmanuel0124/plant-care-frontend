export function SchedulesIndex(props) {
  return (
    <div>
      <h1> all schedules </h1>
      {props.schedules.map((schedule) => (
        <div key={schedule.id}>
          <h2>{schedule.watering_start_date} </h2>
          <h2>{schedule.plant_id} </h2>
          <img src={schedule.image_url} />

        </div>
      ))}
    </div>
  );
}