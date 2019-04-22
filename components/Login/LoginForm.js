import gql from 'graphql-tag';
import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import Link from 'next/link';
import { QUERY_ME } from '../../utils/User';
import {
  FormWrapper,
  Form,
  FormHeader,
  Label,
  Input,
  FormButton,
  ButtonGroup
} from '../../elements/Form';
import CdShape from '../../elements/CdShape';
import redirect from '../../lib/redirect';
import Error from '../../elements/Error';

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

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <Mutation
        mutation={LOGIN}
        errorPolicy='all'
        variables={user}
        refetchQueries={[
          {
            query: QUERY_ME
          }
        ]}
        onCompleted={() => redirect({}, '/collection')}
      >
        {(login, { error, loading }) => (
          <FormWrapper>
            <Form
              onSubmit={async e => {
                e.preventDefault();
                await login();
                setUser({
                  name: '',
                  password: '',
                  email: ''
                });
              }}
              method='post'
            >
              <FormHeader>Login into your account</FormHeader>
              {error && <Error error={error} />}
              <div>
                <Label htmlFor='email'>
                  <p>Email:</p>
                  <Input
                    value={user.email}
                    required
                    placeholder='your email'
                    name='email'
                    id='email'
                    type='email'
                    onChange={handleChange}
                  />
                </Label>
                <Label htmlFor='password'>
                  <p>Password</p>
                  <Input
                    value={user.password}
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
              </div>
              <ButtonGroup>
                <FormButton type='submit'>Login</FormButton>
                <p>
                  Dont have account?
                  <Link href={'/register'}>
                    <a> Join us!</a>
                  </Link>
                </p>
              </ButtonGroup>
            </Form>
            <CdShape />
          </FormWrapper>
        )}
      </Mutation>
    </>
  );
};

export default LoginForm;