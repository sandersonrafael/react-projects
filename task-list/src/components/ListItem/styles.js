import styled from 'styled-components';

export const Container = styled.div`
background-color: #20212c;
padding: 10px;
border-radius: 10px;
margin-bottom: 10px;
display: flex;
align-items: center;

label {
  color: #ccc;
  text-decoration: ${({done}) => done ? 'line-through': 'none'}}

input {
  width: 25px;
  height: 25px;
  margin-right: 5px;
}
`;
