import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export function PlantsIndex(props) {
  return (
    <div className="container">
      <h1>All Plants</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {props.plants.map((plant) => (
          <div key={plant.id} className="col">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{plant.name}</h2>
                <p className="card-text">Description: {plant.description}</p>
                <p className="card-text">Amount of sun: {plant.amount_of_sun}</p>
                <p className="card-text">Days to water: {plant.days_to_water}</p>
                <button
                  className="btn btn-outline-success"
                  onClick={() => props.onShowPlant(plant)}
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
