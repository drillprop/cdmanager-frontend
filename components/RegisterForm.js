import gql from 'graphql-tag';
import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import Link from 'next/link';
import { QUERY_ME } from './User';
import {
  Form,
  FormHeader,
  Input,
  Label,
  FormWrapper,
  FormButton,
  ButtonGroup
} from '../elements/Form';
import CdShape from './CdShape';

const REGISTER = gql`
  mutation REGISTER($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
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
        mutation={REGISTER}
        errorPolicy='all'
        variables={user}
        refetchQueries={[
          {
            query: QUERY_ME
          }
        ]}
      >
        {(register, { error, loading }) => (
          <FormWrapper>
            <Form
              onSubmit={async e => {
                e.preventDefault();
                await register();
                setUser({
                  name: '',
                  password: '',
                  email: ''
                });
              }}
              method='post'
            >
              <FormHeader>Create account</FormHeader>
              <div>
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
              </div>
              <ButtonGroup>
                <FormButton type='submit'>Register</FormButton>
                <p>
                  Already have account?{' '}
                  <Link href={'/login'}>
                    <a> Sign in!</a>
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

export default RegisterForm;
