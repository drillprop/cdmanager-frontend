import gql from 'graphql-tag';
import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import Button from '../elements/Button';
import { QUERY_ME } from './User';
import { Form, FormHeader, Input, Label, FormWrapper } from '../elements/Form';
import CdShape from '../elements/CdShape';

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
          <FormWrapper>
            <Form
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
              <FormHeader>Create account</FormHeader>
              <Label htmlFor='name'>
                <p>Name:</p>
                <Input
                  value={user.name}
                  placeholder='your name'
                  required
                  name='name'
                  id='name'
                  type='text'
                  onChange={handleChange}
                />
              </Label>
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
              <br />
              <Button>Register</Button>
            </Form>
            <CdShape />
          </FormWrapper>
        )}
      </Mutation>
    </>
  );
};

export default RegisterForm;
