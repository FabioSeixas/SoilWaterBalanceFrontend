import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  border: 2px solid;
  padding: 8px 0;
  display: flex;
  align-items: center;
  border-radius: 5px;
  max-width: 387px;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #00bbf9;
    `}

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

export const Error = styled.span`
  height: 20px;
  margin: 0 16px 0 16px;

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }

  svg {
    margin: 0;
  }
`;
