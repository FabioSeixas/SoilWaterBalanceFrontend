import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import getValidationError from '../../utils/getValidationError';

import Logo from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container } from './styles';

interface SignInData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInData) => {
      formRef.current?.setErrors({});

      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email is required')
            .email('Inform a valid email'),
          password: Yup.string().required('Password is required.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        addToast({
          type: 'success',
          title: 'Login realizado!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationError(err);
          formRef.current?.setErrors(error);
          return;
        }
        addToast({
          type: 'error',
          title: 'Error',
          description: 'An error occurred. Try again.',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <>
      <Container>
        <img src={Logo} alt="Soil Water Balance" width={400} />
        <h1>Sign In</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">SignIn</Button>
        </Form>

        <Link to="/signup">Create an Account</Link>
      </Container>
    </>
  );
};

export default SignIn;
