import styled, { StyledComponent, AnyStyledComponent, StyledComponentBase, StyledInterface } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Input = styled.input`
  border: 1px solid #e96e50;
  padding: 6px 12px;
  background-image: none;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;
export const Button = styled.button`
  padding: 6px 12px;
  border-radius: 3px;
  background-color: #e96e50;
  border-color: #c1593f;
  margin-left: 15px;
  cursor: pointer;
  color: #fff;
  &:focus {
    outline: none;
  }
`;
