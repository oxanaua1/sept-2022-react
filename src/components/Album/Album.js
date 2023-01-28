import React from 'react';

import css from './Album.module.css'


const Album = ({album}) => {

    const {userId, id, title} = album;

    return (
        <div className={css.AlbumWrap}>

            <div>userId:{userId}--id:{id}--title:{title}</div>

        </div>
    );
};

export {Album};