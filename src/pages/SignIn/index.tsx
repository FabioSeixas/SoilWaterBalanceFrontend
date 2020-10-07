import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Logo from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    formRef.current?.setErrors({});
    console.log(data);
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email is required')
          .email('Inform a valid email'),
        password: Yup.string().min(
          6,
          'Password must have at least 6 characters',
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {}
  }, []);

  return (
    <>
      <Container>
        <img src={Logo} alt="Soil Water Balance" width={400} />
        <h1>Sign In</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Password" />

          <Button type="submit">SignIn</Button>
        </Form>

        <a href="asasd">Create an Account</a>
      </Container>
    </>
  );
};

export default SignIn;