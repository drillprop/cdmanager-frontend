import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledErrorMessage = styled.ul`
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
      const errMessages = Object.values(
        error.graphQLErrors[0].extensions.errors
      );
      setError([...errMessages]);
    }
  }, [error]);

  return (
    <>
      <StyledErrorMessage className='error-message'>
        {errors.length > 0 && errors.map((err) => <li key={err}>{err}</li>)}
      </StyledErrorMessage>
    </>
  );
};

export default FormError;
