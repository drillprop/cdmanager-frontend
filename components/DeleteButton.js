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
  return (
    <Mutation
      mutation={DELETE_ALBUM}
      variables={{ id }}
      update={(cache, data) => {
        const query = {
          query: SHOW_RECENTLY_ADDED,
          variables: { last: 20 }
        };
        const { albums } = cache.readQuery(query);
        const updatedCollection = albums.filter(album => album.id !== id);
        console.log(updatedCollection);
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
