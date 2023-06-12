import "./SchedulesNew.css";

export function SchedulesNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateSchedule(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Schedule</h1>
      <form onSubmit={handleSubmit} className="schedule-form">
        <div className="form-group">
          plant Name: <input name="plant_id" type="text" className="form-input"/>
        </div>
        <div className="form-group">
          watering start date: <input name="watering_start_date" type="text" className="form-input" />
        </div>
        <div className="form-group">
          User name: <input name="user_id"type="text" className="form-input" />
        </div>
        <button type="submit" className="submit-button">Create schedule</button>
      </form>
    </div>
  );
}