import React from 'react'

function ServiceCard({categoryData}) {
  return (
    <div className='service-card'>
      <h3>{categoryData.category}</h3>
      <ul>
        {categoryData.services.map((service, index) => (
          <li key={index}>{`${service.name}: ${service.price}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default ServiceCard
