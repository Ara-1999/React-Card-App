import styled from 'styled-components';

export const Header = styled.div`
  background-color: rgb(58, 58, 58);
  border: 1px solid black;
  border-left: none;
  border-right: none;
  display: flex;
  justify-content: space-around;

  button{
    background-color: rgb(221, 198, 0);
  }

  button:hover{
    cursor: pointer;
    background-color: green;
  }
`;