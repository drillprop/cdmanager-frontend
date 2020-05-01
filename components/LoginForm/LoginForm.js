import gql from 'graphql-tag';
import Link from 'next/link';
import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import redirect from '../../lib/redirect';
import {
  ButtonGroup,
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
import Error from '../Error/Error';

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

  const handleChange = (e) => {
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
            query: QUERY_ME,
          },
        ]}
        onCompleted={() => redirect({}, '/collection')}
      >
        {(login, { error }) => (
          <FormWrapper>
            <Form
              onSubmit={async (e) => {
                e.preventDefault();
                await login();
                setUser({
                  name: '',
                  password: '',
                  email: '',
                });
              }}
              method='post'
            >
              <FormHeader>Login into your account</FormHeader>
              <Error error={error} />
              <Label htmlFor='email'>
                Email
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
                Password
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
              <ButtonGroup>
                <FormButton type='submit'>Login</FormButton>
                <MobileLinks>
                  Dont have account?
                  <Link href={'/register'}>
                    <a>Sign up!</a>
                  </Link>
                </MobileLinks>
              </ButtonGroup>
            </Form>
            <CdShape
              link='/register'
              question={`Don't have account?`}
              answer='Sign up!'
            />
          </FormWrapper>
        )}
      </Mutation>
    </>
  );
};

export default LoginForm;
