import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 16px;
  }

  form {
    max-width: 387px;
    width: 100%;
    text-align: center;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin-top: 12px;
    color: #2c2826;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.5, '#bdb5b3')};
    }
  }
`;
