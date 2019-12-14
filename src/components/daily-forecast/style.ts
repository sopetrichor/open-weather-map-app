import styled, { StyledComponent, AnyStyledComponent, StyledComponentBase, StyledInterface } from 'styled-components';

export const SearchResultWrapper = styled.div`
  margin-top: 15px;
  border-top: 1px solid #ddd;
  ul {
    list-style: none;
    padding-inline-start: 10px;
    li {
      padding: 5px 0px;
    }
  }
  h2 {
    color: #e96e50;
  }
`;
export const Title = styled.a`
  color: #e96e50;
  text-decoration: none;
  font-weight: bold;
`;
export const Badge = styled.span`
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
export const TemperatureText = styled.span`
  &:after {
    content: '\\2103';
  }
`;
