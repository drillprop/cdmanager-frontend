import React from 'react';
import styled from 'styled-components';

const StyledErrorMessage = styled.p`
  margin: 0 auto;
  text-align: center;
`;

const Error = ({ error }) => {
  if (error)
    return (
      <StyledErrorMessage>
        {error.message.replace('GraphQL error: ', '')}
      </StyledErrorMessage>
    );
  return null;
};

export default Error;
