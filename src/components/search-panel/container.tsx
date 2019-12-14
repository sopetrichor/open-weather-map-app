import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react';

import useFetchDailyForecast from '@hooks/use-fetch-daily-forecast';
import { SearchOperation } from './component';

const SearchBarContainer: React.FC = (props: any) => {
  const [state, start, isDoing, isDone] = useFetchDailyForecast();
  const inputEl = useRef(null);

  const onSearchByCityName = () => {
    start(inputEl.current.value);
  };
  const onKeyUp = (e: any) => {
    if (e.keyCode === 13) {
      start(inputEl.current.value);
    }
  };

  useEffect(() => {
    console.log(`### state`, state);
  }, [state]);

  return <SearchOperation inputElRef={inputEl} onSearch={onSearchByCityName} onKeyUp={onKeyUp} />;
};

export default SearchBarContainer;
