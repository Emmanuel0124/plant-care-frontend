import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export function SchedulesIndex(props) {
  return (
    <div className="container">
      <h1>All Schedules</h1>
      <a href="/schedules/new" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">New Schedule</a>
      {props.schedules.map((schedule) => (
        <div key={schedule.id}>
          
          <h2>plant name: {schedule.plant_id}</h2>
          
          <Calendar value={new Date(schedule.watering_start_date)} />
        </div>
      ))}
    </div>
  );
}
