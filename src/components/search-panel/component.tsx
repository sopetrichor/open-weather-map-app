import React from 'react';

import * as SC from './style';

interface SearchOperationProps {
  inputElRef: React.Ref<HTMLInputElement>;
  onSearch: () => void;
  onKeyUp: (arg0: any) => void;
}
export const SearchOperation: React.FC<SearchOperationProps> = (props): JSX.Element => {
  const { inputElRef, onSearch, onKeyUp } = props;
  return (
    <SC.Container>
      <SC.Input ref={inputElRef} value="Taipei" onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => onKeyUp(e)} />
      <SC.Button onClick={onSearch}>Search</SC.Button>
    </SC.Container>
  );
};
