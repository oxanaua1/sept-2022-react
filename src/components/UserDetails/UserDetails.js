import React from 'react';
import {useSelector} from "react-redux";


const UserDetails = () => {

 const {userById} = useSelector(state => state.users);



 return (
  <div>
      {userById &&
      <div>
       <div>
        <h3>id: {userById.id} <br/>
         name: {userById.name} <br/>
         username: {userById.username} <br/>
         email: {userById.email} <br/>
        </h3>

        <div>street: {userById.address.street} <br/>
         suite: {userById.address.suite} <br/>
         city: {userById.address.city} <br/>
         zipcode: {userById.address.zipcode} <br/>
        </div>

        <div> lat: {userById.address.geo.lat} <br/>
         lng: userById.address.geo.lng} <br/>
        </div>
        <div>
         phone: {userById.phone} <br/>
         websit: {userById.website} <br/>
         companyName: {userById.company.name} <br/>
         catchPhrase: {userById.company.catchPhrase} <br/>
         bs: {userById.company.name} <br/>
        </div>
       </div>
      </div>}
  </div>
 );
};

export {UserDetails};