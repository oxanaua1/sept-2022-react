import React from 'react';

import css from './HomePage.module.css'


const HomePage = () => {

    return (

        <div className={css.HomePageWrap}>
            <h2>Welcome to Home Page</h2>
            <img
                src='https://img.freepik.com/free-vector/happy-young-people-saying-hello-different-languages-students-with-speech-bubbles-hands-greeting-gesture_74855-10827.jpg'
                alt="welcome"/>
        </div>
    );
};

export {HomePage};