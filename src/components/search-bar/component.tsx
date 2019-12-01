import React from 'react';
import styled, { StyledComponent, AnyStyledComponent, StyledComponentBase, StyledInterface } from 'styled-components';

export const SC: { [key: string]: AnyStyledComponent } = {};
SC.Container = styled.div``;
SC.Input = styled.input`
  border-color: #e96e50;
  padding: 6px 12px;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
SC.Button = styled.button`
  border-radius: 3px;
  background-color: #e96e50;
  border-color: #c1593f;
  margin-left: 15px;
`;

interface SearchOperationProps {
  inputElRef: React.Ref<HTMLInputElement>;
  handleOnSearch: () => void;
}
export const SearchOperation: React.FC<SearchOperationProps> = (props): JSX.Element => {
  const { inputElRef, handleOnSearch } = props;
  return (
    <SC.Container>
      <SC.Input ref={inputElRef} />
      <SC.Button onClick={handleOnSearch}>Search</SC.Button>
    </SC.Container>
  );
};

interface SearchResultProps {
  countryName: string;
  cityName: string;
}
export const SearchResult: React.FC<SearchResultProps> = (props): JSX.Element => {
  const { countryName, cityName } = props;
  return (
    <div>
      CountryName: {countryName}
      CityName: {cityName}
    </div>
  );
};
