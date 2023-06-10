import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export function PlantsIndex(props) {
  return (
    <div className="container">
      <h1>Your Plants?</h1>
      <div className="my-4">
        <a href="/plants/new" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">New Plant</a>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {props.plants.map((plant) => (
          <div key={plant.id} className="col">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{plant.name}</h2>
                <img src={plant.image_url} />
                <button
                  className="btn btn-outline-success"
                  onClick={() => props.onShowPlant(plant)}> More Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
