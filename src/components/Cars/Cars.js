import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {carActions} from "../../redux";
import {useSearchParams} from "react-router-dom";

const Cars = () => {

    const {cars, prevPage, nextPage} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(carActions.getAll({page: query.get('page')}))
    }, [dispatch, query])

//disabled={!prevPage} кнопка виключена, якщо нічого не записано в prevPage
// коли буду змінювати кнопкою query, useEffect буде це відслідковувати і робити запит
    return (

        <div>


            <div>
                <button disabled={!prevPage}
                        onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>prev
                </button>
                <button disabled={!nextPage}
                        onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>next
                </button>
            </div>
            <div>
                {cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </div>
    );
};

export {Cars};