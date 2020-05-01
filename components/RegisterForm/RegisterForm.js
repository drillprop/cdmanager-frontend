import gql from 'graphql-tag';
import Link from 'next/link';
import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
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
import Error from '../Error/Error';

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

  const handleChange = (e) => {
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
            query: QUERY_ME,
          },
        ]}
        onCompleted={() => redirect({}, '/collection')}
      >
        {(register, { error }) => (
          <FormWrapper>
            <Form
              onSubmit={async (e) => {
                e.preventDefault();
                await register();
                setUser({
                  name: '',
                  password: '',
                  email: '',
                });
              }}
              method='post'
            >
              <FormHeader>Create account</FormHeader>
              <Error error={error} />
              <Label htmlFor='name'>
                Name
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
              <FormButton type='submit'>Register</FormButton>
              <MobileLinks>
                Already have account?{' '}
                <Link href={'/login'}>
                  <a> Sign in!</a>
                </Link>
              </MobileLinks>
            </Form>
            <CdShape
              link='/login'
              question={`Already have account?`}
              answer='Sign in!'
            />
          </FormWrapper>
        )}
      </Mutation>
    </>
  );
};

export default RegisterForm;
