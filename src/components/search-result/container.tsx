import React, { useEffect, useState, useCallback, useMemo, useRef, Fragment } from 'react';
import styled, { StyledComponent, AnyStyledComponent, StyledComponentBase, StyledInterface } from 'styled-components';
import { useDispatch, useMappedState } from 'redux-react-hook';

import { ActionType } from '../../actions/';

const SC: { [key: string]: AnyStyledComponent } = {};
SC.SearchResultWrapper = styled.div`
    margin-top: 15px;    
    border-top: 1px solid #ddd;
    ul {
        list-style: none;
        padding-inline-start: 10px;
        li {
            padding: 5px 0px;
        }
    }
`;
SC.Title = styled.a`
    color: #e96e50;
    text-decoration: none;
    font-weight: bold;
`;
SC.Badge = styled.span`
    display: inline-block;
    min-width: 10px;
    padding: 3px 7px;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    line-height: 1;
    vertical-align: baseline;
    white-space: nowrap;
    text-align: center;
    background-color: #4e4d4a;
    border-radius: 10px;
`;
SC.TemperatureText = styled.span`
    &:after {
        content: "\\2103";
    }
`;

const SearchResultContainer: React.FC = (props: any) => {
    const mapState = useCallback((state) => state, []);
    const reducer = useMappedState(mapState);

    if (reducer.Redux.state === ActionType.Done) {
        const { countryCode, cityName, weather } = reducer;
        return (
            <SC.SearchResultWrapper>
                <ul>
                    <li>
                        <SC.Title>
                            {cityName}, {countryCode}
                        </SC.Title>
                    </li>
                    <li>
                        <SC.Badge>
                            <SC.TemperatureText>
                                {weather.temperature}
                            </SC.TemperatureText>
                        </SC.Badge>
                        <span>, temperature from {weather.minTemperature} to </span>
                        <SC.TemperatureText>
                            {weather.maxTemperature}
                        </SC.TemperatureText>
                    </li>
                </ul>
            </SC.SearchResultWrapper>
        );
    }

    return null;
}
export default SearchResultContainer;