import './App.css';
import React, {useState} from "react";

import {Posts, Users} from "./components";




function App() {

    const [userId, setUserId] = useState(null);


    return (
        <div className="App">

            <Users setUserId={setUserId}/>

            <hr/>

            {userId && <Posts userId={userId}/>}

        </div>
    );
}

export default App;
