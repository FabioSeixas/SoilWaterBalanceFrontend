import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...children
}) => {
  return (
    <Container>
      <input type="text" {...children} />
    </Container>
  );
};

export default Input;
