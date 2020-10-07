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
    max-width: 400px;
    width: 100%;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #2c2826;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.3, '#FAFFFD')};
    }
  }
`;
