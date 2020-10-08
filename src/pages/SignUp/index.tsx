import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory, Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import getValidationError from '../../utils/getValidationError';

import Logo from '../../assets/logo.png';

import { Container } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignUpData {
  username: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpData) => {
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

        await api.post('/users', {
          username: data.username,
          email: data.email,
          password: data.password,
        });

        history.push('/');

        addToast({
          type: 'success',
          title: 'Registration finished',
          description: 'You can now login the app.',
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
    [addToast, history],
  );

  return (
    <>
      <Container>
        <img src={Logo} alt="Soil Water Balance" width={400} />
        <h1>Sign Up</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="username" icon={FiUser} placeholder="Username" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">Welcome</Button>
        </Form>

        <Link to="/">
          <FiArrowLeft />
          Back to Home
        </Link>
      </Container>
    </>
  );
};

export default SignUp;
