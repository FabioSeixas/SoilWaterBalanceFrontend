import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #364b59;
  border: 0;
  height: 54px;
  padding: 0 0;
  color: #fff;
  width: 100%;
  border-radius: 5px;
  margin: 12px 0;
  transition: background 0.2s;

  &:hover {
    background-color: ${shade(0.3, '#364b59')};
  }
`;
