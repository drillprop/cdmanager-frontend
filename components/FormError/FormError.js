import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ErrorList = styled.ul`
  padding: 0;
  display: table;
  font-size: 0.8rem;
  margin: 1.5rem auto 0;
  color: #e22929;
  list-style: square;
`;

const FormError = ({ error }) => {
  const [errors, setError] = useState([]);

  useEffect(() => {
    if (error) {
      if (error.graphQLErrors[0]) {
        const errMessages = Object.values(
          error.graphQLErrors[0].extensions.errors
        );
        setError([...errMessages]);
      } else {
        setError(['Something went wrong']);
      }
    }
  }, [error]);

  return (
    <>
      <ErrorList className='error-message'>
        {errors.length > 0 && errors.map((err) => <li key={err}>{err}</li>)}
      </ErrorList>
    </>
  );
};

export default FormError;
