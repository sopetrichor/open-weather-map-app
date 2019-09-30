import React, { useEffect, useState, useCallback, useMemo, useRef, Fragment } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';

import { creator } from '../../actions';
import useInput from '../../hooks/useInput';
import { SearchOperation, SearchResult } from './component';

// const searchWeatherByCityName = async (cityName: string) => {
//     const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=9c39fa3ce9d953fdd507d7d9f77093ef`;
//     const response = await fetch(API_URL);
//     if (!response.ok) {
//         return new Error();
//     }
//     return response.json();
// }

const SearchBarContainer: React.FC = (props: any) => {
    const dispatch = useDispatch();
    const mapState = useCallback((state) => state, []);
    const reducer = useMappedState(mapState);
    const inputEl = useRef(null);

    // const onSearch = useCallback(async () => {
    //     searchWeatherByCityName(keyword).then(resp => {
    //         const { city } = resp;
    //         const { name, country } = city;
    //         setCityName(name);
    //         setCountryName(country);
    //         console.log('@ resp', resp);
    //     }).catch(e => {
    //         console.log('@ error', e);
    //     });
    // }, [keyword]);
    const searchByCityName = () => {
        dispatch(creator.doing({ cityName: inputEl.current.value }, {}));
    };

    return (
        <div>
            <SearchOperation
                inputElRef={inputEl}
                handleOnSearch={searchByCityName}
            />
        </div>
    );
}
export default SearchBarContainer;