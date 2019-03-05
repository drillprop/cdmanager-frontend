import gql from 'graphql-tag';
import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import Button from '../elements/Button';
import { QUERY_ME } from './User';

const SIGNUP = gql`
  mutation SIGNUP($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      name
      email
      id
    }
  }
`;

const RegisterForm = () => {
  const [user, setUser] = useState({ name: '', password: '', email: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <Mutation
        mutation={SIGNUP}
        errorPolicy='all'
        variables={user}
        refetchQueries={[
          {
            query: QUERY_ME
          }
        ]}
      >
        {(signup, { error, loading }) => (
          <>
            <h1>Sign up for new account</h1>
            <form
              onSubmit={async e => {
                e.preventDefault();
                await signup();
                setUser({
                  name: '',
                  password: '',
                  email: ''
                });
              }}
              method='post'
            >
              <label htmlFor='name'>
                <p>Name:</p>
                <input
                  value={user.name}
                  placeholder='your name'
                  required
                  name='name'
                  id='name'
                  type='text'
                  onChange={handleChange}
                />
              </label>
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
              <Button>Register</Button>
            </form>
          </>
        )}
      </Mutation>
    </>
  );
};

export default RegisterForm;
