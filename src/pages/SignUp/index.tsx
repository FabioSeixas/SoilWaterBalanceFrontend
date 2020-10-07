import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationError from '../../utils/getValidationError';

import Logo from '../../assets/logo.png';

import { Container } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    formRef.current?.setErrors({});
    try {
      const schema = Yup.object().shape({
        username: Yup.string().required('Name is required.'),
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
    } catch (err) {
      const error = getValidationError(err);
      formRef.current?.setErrors(error);
    }
  }, []);

  return (
    <>
      <Container>
        <img src={Logo} alt="Soil Water Balance" width={400} />
        <h1>Sign Up</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="username" placeholder="Username" />
          <Input name="email" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Password" />

          <Button type="submit">Welcome</Button>
        </Form>
      </Container>
    </>
  );
};

export default SignUp;
