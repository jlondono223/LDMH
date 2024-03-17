import React from "react";
import '../../App.css';
import ServiceData from '../ServiceData'; 
import ServiceCard from '../ServiceCard'; 

function Services() {
    return (  
      <div>
        <h1 className='services'>Services</h1>;
        {ServiceData.map((category, index) => (
          // Pass 'categoryData' as a prop to 'ServiceCard'
          <ServiceCard key={index} categoryData={category} />
        ))}
      </div>
    );
  }
  
  export default Services;