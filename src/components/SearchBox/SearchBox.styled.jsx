import styled from '@emotion/styled';

export const Box = styled.form`
margin-bottom: 20px;
display: flex;
`;

export const Input = styled.input`
  display: inline-block;
  padding: 5px;
  width: 300px;
  font: inherit;
  font-size: 20px;
  border: 2px solid #808080;
  border-radius: 4px;
  padding-left: 4px;
  padding-right: 4px;
    
    :focus-within {
    border: 2px solid #5959a6;
    outline: 1px solid transparent;
  }
  :hover {
    border: 2px solid #5959a6;
    outline: 1px solid transparent;
`;

export const Button = styled.button`
  display: inline-block;
  width: 70px;
  border: 2px solid #808080;
  border-radius: 4px;
  color: #1a1a1a;;
  background-color: ##F5F5F5;
  cursor: pointer;

  :hover {
    border: 2px solid #8d8d8d;
    outline: 1px solid transparent;
    background-color: #b0b0b0;
  }

`