import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef
} from "react";
import { useDispatch, useMappedState } from "redux-react-hook";

import useSearch from "../../hooks/useSearch";
import { SearchOperation, SearchResult } from "./component";

const SearchBarContainer: React.FC = (props: any) => {
  const [state, start, isDoing, isDone] = useSearch();
  const inputEl = useRef(null);

  const searchByCityName = () => {
    start(inputEl.current.value);
  };

  useEffect(() => {
    console.log(`### state`, state);
  }, [state]);

  return (
    <div>
      <SearchOperation inputElRef={inputEl} handleOnSearch={searchByCityName} />
    </div>
  );
};
export default SearchBarContainer;
