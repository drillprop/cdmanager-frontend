import gql from 'graphql-tag';
import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import Button from '../elements/Button';
import { QUERY_ME } from './User';

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
          <>
            <h1>Login into your account</h1>
            <form
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
              <label htmlFor='email'>
                <p>Email:</p>
                <input
                  value={user.email}
                  required
                  placeholder='your email'
                  name='email'
                  id='email'
                  type='email'
                  onChange={handleChange}
                />
              </label>
              <label htmlFor='password'>
                <p>Password</p>
                <input
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
              </label>
              <br />
              <Button>Login</Button>
            </form>
          </>
        )}
      </Mutation>
    </>
  );
};

export default LoginForm;
