import React from 'react';

import {Header, PostDetails, Posts, UserDetails, Users} from "./components";

const App = () => {
    return (
        <div>
            <div style={{border: "1px solid black", height: "100px", background: "yellow"}}>
                <Header/>
            </div>


            <div style={{display: "flex", gap: "20px"}}>
                <Users/>
                <UserDetails/>
            </div>



            <div style={{display: "flex", gap: "20px"}}>
                <Posts/>
                <PostDetails/>

            </div>
        </div>
    );
};

export {App};