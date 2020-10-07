import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border: 2px solid #2c2826;
  padding: 8px 0;
  display: flex;
  align-items: center;
  border-radius: 5px;
  max-width: 387px;
  color: #2c2826;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #ff1d15;
      color: #ff1d15;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #00bbf9;
      color: #00bbf9;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #00bbf9;
    `}

  input {
    background: transparent;
    border: 0;
    flex: 1;
    width: 100%;
    padding-left: 16px;
    background-color: #fff;

    &::placeholder {
      color: #bdb5b3;
    }
  }

  svg {
    margin-left: 8px;
  }
`;

export const Error = styled(Tooltip)`
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
