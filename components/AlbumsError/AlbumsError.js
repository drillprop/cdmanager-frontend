import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ApolloError } from 'apollo-boost';
import Button from '../../styles/Button';
import Link from 'next/link';

const AlbumsErrorWrapper = styled.div`
  h2 {
    margin-top: 30px;
    text-align: center;
  }
  margin: 0 auto;
  width: 300px;
  p {
    margin-top: 1.5rem;
    font-size: 1rem;
    text-align: center;
  }
  button {
    margin: 30px auto;
  }
`;

const AlbumsError = ({ error }) => {
  return (
    <AlbumsErrorWrapper>
      <h2>{error ? 'error' : ''}</h2>
      <p>{error && error.graphQLErrors[0].message}</p>
      {error?.graphQLErrors[0]?.extensions.code === 'UNAUTHENTICATED' ? (
        <Link href='/login'>
          <Button small>back to login page</Button>
        </Link>
      ) : null}
    </AlbumsErrorWrapper>
  );
};

AlbumsError.propTypes = {
  error: PropTypes.instanceOf(ApolloError),
};

export default AlbumsError;
