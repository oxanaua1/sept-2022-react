import React from 'react';

const UserDetails = ({user, onClearUserDetails}) => {

    const {id: userId} = user;
    return (
        <div>
            <button onClick={() => onClearUserDetails(userId)}>Clear User Details</button>

            <div>
                <h3>id: {user.id} <br/>
                    name: {user.name} <br/>
                    username: {user.username} <br/>
                    email: {user.email} <br/>
                </h3>

                <div>street: {user.address.street} <br/>
                    suite: {user.address.suite} <br/>
                    city: {user.address.city} <br/>
                    zipcode: {user.address.zipcode} <br/>
                </div>

                <div> lat: {user.address.geo.lat} <br/>
                    lng: user.address.geo.lng} <br/>
                </div>
                <div>
                    phone: {user.phone} <br/>
                    websit: {user.website} <br/>
                    companyName: {user.company.name} <br/>
                    catchPhrase: {user.company.catchPhrase} <br/>
                    bs: {user.company.name} <br/>
                </div>
            </div>

        </div>
    );
};

export {UserDetails};