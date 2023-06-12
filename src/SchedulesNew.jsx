export function SchedulesNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateSchedule(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Schedule</h1>
      <form onSubmit={handleSubmit}>
        <div>
          plant Name: <input name="plant_id" type="text"/>
        </div>
        <div>
          watering start date: <input name="watering_start_date" type="text" />
        </div>
        <div>
          User name: <input name="user_id"type="text" />
        </div>
        <button type="submiy">Create schedule</button>
      </form>
    </div>
  );
}