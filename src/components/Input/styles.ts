import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid;
  padding: 8px 0;
  display: flex;
  align-items: center;
  border-radius: 5px;

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    color: #2c2826;
    border: 0;
    flex: 1;
    width: 100%;
    padding-left: 16px;
    background-color: #fff;

    &::placeholder {
      color: #bdb5b3;
    }
  }
`;
