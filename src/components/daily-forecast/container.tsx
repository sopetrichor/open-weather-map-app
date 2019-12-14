import React, { useEffect, useState, useCallback, useMemo, useRef, Fragment } from 'react';

import * as SC from './style';
import useFetchDailyForecast from '@hooks/use-fetch-daily-forecast';
import { ForecastInterface } from 'prop-types/forecast';

const SearchResultContainer: React.FC = () => {
  const [state, start, isDoing, isDone] = useFetchDailyForecast();

  if (isDone) {
    const { city, forecasts } = state;
    const { name, country } = city;
    return (
      <SC.SearchResultWrapper>
        <h2>Current weather and forecasts in your city</h2>
        <ul>
          <li>
            <SC.Title>
              {name}, {country}
            </SC.Title>
          </li>
          {forecasts.map((data: ForecastInterface, index: number) => {
            return (
              <li key={index}>
                <label>
                  {data.date}, {data.description}, {data.rain ? data.rain + '%' : '0%'}
                </label>
              </li>
            );
          })}
        </ul>
      </SC.SearchResultWrapper>
    );
  }

  return null;
};
export default SearchResultContainer;
