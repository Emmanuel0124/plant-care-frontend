import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./SchedulesIndex.css";


export function SchedulesIndex(props) {
  return (
    <div className="container">
      <h1>All Schedules</h1>
      <a href="/schedules/new" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">New Schedule</a>
      {props.schedules.map((schedule) => (
        <div className="schedule-item" key={schedule.id}>
          <h2>plant name: {schedule.plant.name}</h2>
          <Calendar className="react-calendar" value={new Date(schedule.watering_start_date)} />
          <hr />
        </div>
      ))}
    </div>
  );
}
