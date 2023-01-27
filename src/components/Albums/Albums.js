import React, {useEffect, useState} from 'react';
import {albumsService} from "../../services";
import {Album} from "../Album/Album";
import css from './Albums.module.css'

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        albumsService.getAll().then(({data}) => setAlbums([...data]))
    }, [])
    console.log(albums);

    return (
        <div className={css.AlbumsWrap}>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};