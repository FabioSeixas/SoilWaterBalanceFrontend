import React from 'react';

import Logo from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <img src={Logo} alt="Soil Water Balance" width={400} />
        <h1>Sign In</h1>

        <form>
          <Input placeholder="E-mail" />
          <Input type="password" placeholder="Password" />

          <Button type="submit">SignIn</Button>
        </form>

        <a href="asasd">Create an Account</a>
      </Container>
    </>
  );
};

export default SignIn;
