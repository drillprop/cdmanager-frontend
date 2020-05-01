import React from 'react';
import styled from 'styled-components';

const StyledErrorMessage = styled.p`
  margin: 30px auto 0;
  text-align: center;
  color: #e22929;
`;

const Error = ({ error }) => {
  return (
    <StyledErrorMessage className='error-message'>
      {error ? error.message.replace('GraphQL error: ', '') : ''}
    </StyledErrorMessage>
  );
};

export default Error;
