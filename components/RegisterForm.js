import gql from 'graphql-tag';
import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import Button from '../elements/Button';

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
      <Mutation mutation={SIGNUP} variables={user}>
        {(signup, { error, loading }) => (
          <>
            <h1>Sign up for new account</h1>
            <form
              onSubmit={async e => {
                e.preventDefault();
                await signup();
              }}
              method='post'
            >
              <label htmlFor='name'>
                <p>Name:</p>
                <input
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
