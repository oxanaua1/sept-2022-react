import React, {useContext} from 'react';

import css from './HomePage.module.css'
import {MyContext} from "../../index";
import {Button} from "../../components/Button/Button";


const HomePage = () => {


    const context = useContext(MyContext); // Обєкт context value={{name:'Max, age:15'}}

    return (

        <div>
            {JSON.stringify(context)}

            <Button click={() => console.log('Click from Custom Button!!!')}
                    style={{backgroundColor: 'black'}}>click<
                    /Button>


            <div className={css.HomePageWrap}>

                <h2>Welcome to Home Page</h2>
                <img
                    src='https://img.freepik.com/free-vector/happy-young-people-saying-hello-different-languages-students-with-speech-bubbles-hands-greeting-gesture_74855-10827.jpg'
                    alt="welcome"/>
            </div>
        </div>
    );
};

export
{
    HomePage
}
    ;