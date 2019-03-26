import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { SHOW_RECENTLY_ADDED } from './RecentAlbums';

const DELETE_ALBUM = gql`
  mutation DELETE_ALBUM($id: String!) {
    deleteAlbum(id: $id) {
      message
    }
  }
`;

const DeleteButton = ({ id, page }) => {
  const query = {
    query: SHOW_RECENTLY_ADDED,
    variables: { last: 10 * (page || 1) }
  };
  return (
    <Mutation
      mutation={DELETE_ALBUM}
      variables={{ id }}
      refetchQueries={[query]}
    >
      {deleteAlbum => (
        <button
          onClick={() => {
            deleteAlbum();
          }}
        >
          Delete
        </button>
      )}
    </Mutation>
  );
};

export default DeleteButton;
