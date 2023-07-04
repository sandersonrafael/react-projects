import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;
  display: flex;
  align-items: center;

  .image {
    margin-right: 7px;
    font-size: 20px;
    cursor: pointer;
  }

  input {
    border: none;
    background-color: transparent;
    outline: none;
    color: #fff;
    font-size: 18px;
    flex: 1;
  }
`;
