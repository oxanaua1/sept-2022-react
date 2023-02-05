import React, {useState} from 'react';
import {ClassComponent} from "./components/classComponent";
import {FunctionComponent} from "./components/FunctionComponent";

const App = () => {
    const [flag, setFlag] = useState(true);
    return (
        <div>

            {/*{flag && <ClassComponent name={'max'}/>}*/}
            {flag && <FunctionComponent name={'max'}/>}
            <button onClick={() => setFlag(prev => !prev)}>Hide</button>
        </div>
    );
};

export {App};