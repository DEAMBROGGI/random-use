import React from "react";


const User = ({ name, location, picture }) => {
  return (
    


<div className="carousel-item">
        
            
                <img src={picture.medium} alt={name.first} className="d-block w-100"  />
            
            
        </div>
      
  );
};

export default User;