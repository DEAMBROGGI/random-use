import React from 'react';
import User from './User';


const UsersList = ({ users }) => {
  return (
    
      


      
   
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
  {users && users.map((user) => <User key={user.login.uuid} {...user} />)}
  </div>
</div>
    
  );
};

export default UsersList;