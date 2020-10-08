import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'info' | 'success' | 'error';
  hasDescription: boolean;
}

const toastTypeVariation = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled.div<ToastProps>`
  width: 300px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  ${props => toastTypeVariation[props.type || 'info']}

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin: 5px 8px 8px 2px;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      line-height: 20px;
      font-size: 15px;
      opacity: 0.8;
    }
  }

  button {
    position: absolute;
    right: 20px;
    top: 14px;
    border: 0;
    background: transparent;
    opacity: 0.6;
    color: inherit;
  }

  ${props =>
    !props.hasDescription &&
    css`
      padding: 10px;
    `}
`;
