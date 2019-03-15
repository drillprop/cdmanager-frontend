import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const DELETE_ALBUM = gql`
  mutation DELETE_ALBUM($id: String!) {
    deleteCd(id: $id) {
      message
    }
  }
`;

const DeleteButton = ({ id }) => (
  <Mutation mutation={DELETE_ALBUM} variables={{ id }}>
    {deleteCd => <button onClick={deleteCd}>Delete</button>}
  </Mutation>
);

export default DeleteButton;
