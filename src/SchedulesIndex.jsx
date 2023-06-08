export function SchedulesIndex(props) {
  return (
    <div>
      <h1> all schedules </h1>
      <button onClick={() => props.onShowSchedule(schedule)}>show schedule</button>
      {props.schedules.map((schedule) => (
        <div key={schedule.id}>
          <h2>{schedule.watering_start_date} </h2>
          <img src={schedule.image_url} />

        </div>
      ))}
    </div>
  );
}