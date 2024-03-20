import React from 'react'
import './ServiceCard.css';

function ServiceCard({ categoryData }) {
  return (
    <div className="row">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={`/images/${categoryData.image}`} alt={categoryData.category} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {categoryData.category}<i className="material-icons right">more_vert</i>
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {categoryData.category}<i className="material-icons right">close</i>
          </span>
          <ul>
            {categoryData.services.map((service, index) => (
              <li key={index}>{`${service.name}: ${service.price}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;