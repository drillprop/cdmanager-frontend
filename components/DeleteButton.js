import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const DELETE_ALBUM = gql`
  mutation DELETE_ALBUM($id: String!) {
    deleteAlbum(id: $id) {
      message
    }
  }
`;

const DeleteButton = ({ id }) => (
  <Mutation mutation={DELETE_ALBUM} variables={{ id }}>
    {deleteAlbum => <button onClick={deleteAlbum}>Delete</button>}
  </Mutation>
);

export default DeleteButton;
