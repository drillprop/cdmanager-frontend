import gql from 'graphql-tag';
import Link from 'next/link';
import React, { useState } from 'react';
import { useMutation } from 'react-apollo';
import redirect from '../../lib/redirect';
import {
  Form,
  FormButton,
  FormHeader,
  FormWrapper,
  Input,
  Label,
  MobileLinks,
} from '../../styles/Form';
import { QUERY_ME } from '../../utils/User';
import CdShape from '../CdShape/CdShape';
import FormError from '../FormError/FormError';

const LOGIN = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      name
      email
      id
    }
  }
`;

const LoginForm = () => {
  const [user, setUser] = useState({ password: '', email: '' });
  const [login, { loading, error }] = useMutation(LOGIN, {
    errorPolicy: 'all',
    variables: user,
    refetchQueries: [
      {
        query: QUERY_ME,
      },
    ],
    onCompleted: () => redirect({}, '/collection'),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await login();
    setUser({
      name: '',
      password: '',
      email: '',
    });
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleLogin} method='post'>
        <FormHeader>Login into your account</FormHeader>
        <FormError error={error} />
        <Label htmlFor='email'>
          Email
          <Input
            value={user.email}
            error={error}
            required
            placeholder='your email'
            name='email'
            id='email'
            type='email'
            onChange={handleChange}
          />
        </Label>
        <Label htmlFor='password'>
          Password
          <Input
            value={user.password}
            error={error}
            required
            placeholder='your password'
            name='password'
            id='password'
            type='password'
            aria-autocomplete={'list'}
            autoComplete='new-password'
            onChange={handleChange}
          />
        </Label>
        <FormButton type='submit'>
          {loading ? 'Signing...' : 'Login'}
        </FormButton>
        <MobileLinks>
          Dont have account?
          <Link href={'/register'}>
            <a> Sign up!</a>
          </Link>
        </MobileLinks>
      </Form>
      <CdShape
        link='/register'
        question={`Don't have account?`}
        answer='Sign up!'
      />
    </FormWrapper>
  );
};

export default LoginForm;
