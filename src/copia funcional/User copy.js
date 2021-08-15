import React from "react";


const User = ({ name, location, picture }) => {
  return (
    


<div className="user">
        <div className="col " >
        <div className="card small">
            <div className="center-align ">
                <img src={picture.medium} alt={name.first} className="circle responsive-img " />
            </div>
            <div className="center-align ">
                <div className="name">
                 {name.first} {name.last}
                </div>
                <div className="city">
                 {location.city}
                </div>
                <div>
                 {location.country}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default User;