import React from "react";
import '../../App.css';
import ServiceData from '../ServiceData'; 
import ServiceCard from '../ServiceCard'; 

function Services() {
    return (  
      <div>
        <h1 className='services'>Services</h1>
        <div className="services__container">
          <div className="services__wrapper">
          {ServiceData.map((category, index) => (
            // Pass 'categoryData' as a prop to 'ServiceCard'
            <ServiceCard key={index} categoryData={category} />
          ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Services;