import React from 'react';

const Error = ({ error }) => {
  if (error) return <p>{error.message.replace('GraphQL error: ', '')}</p>;
  return null;
};

export default Error;
