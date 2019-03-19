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

const DeleteButton = ({ id }) => {
  const query = {
    query: SHOW_RECENTLY_ADDED,
    variables: { last: 20 }
  };
  const filterAlbums = albums => albums.filter(album => album.id !== id);
  return (
    <Mutation
      mutation={DELETE_ALBUM}
      variables={{ id }}
      refetchQueries={[query]}
      update={cache => {
        const { albums } = cache.readQuery(query);
        const updatedCollection = filterAlbums(albums);
        cache.writeQuery({
          ...query,
          data: {
            albums: [...updatedCollection]
          }
        });
      }}
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
