import React from 'react'

function ServiceCard({ categoryData }) {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            {/* Use a placeholder or category-specific image */}
            <img className="activator" src={`/images/${categoryData.image}`} alt={categoryData.category} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {categoryData.category}<i className="material-icons right">more_vert</i>
            </span>
            {/* Optional: Provide a summary or link here if needed */}
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              {categoryData.category}<i className="material-icons right">close</i>
            </span>
            {/* Map through each service for this category */}
            <ul>
              {categoryData.services.map((service, index) => (
                <li key={index}>{`${service.name}: ${service.price}`}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;