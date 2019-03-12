import gql from 'graphql-tag';
import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import Button from '../elements/Button';
import { QUERY_ME } from './User';
import { FormWrapper, Form, FormHeader, Label, Input } from '../elements/Form';
import CdShape from '../elements/CdShape';

const SIGNIN = gql`
  mutation SIGNIN($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
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
        mutation={SIGNIN}
        errorPolicy='all'
        variables={user}
        refetchQueries={[
          {
            query: QUERY_ME
          }
        ]}
      >
        {(signin, { error, loading }) => (
          <FormWrapper>
            <Form
              onSubmit={async e => {
                e.preventDefault();
                await signin();
                setUser({
                  name: '',
                  password: '',
                  email: ''
                });
              }}
              method='post'
            >
              <FormHeader>Login into your account</FormHeader>
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
              <Button>Login</Button>
            </Form>
            <CdShape />
          </FormWrapper>
        )}
      </Mutation>
    </>
  );
  Input;
};

export default LoginForm;
Label;
