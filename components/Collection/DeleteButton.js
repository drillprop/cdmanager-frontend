import React, { useContext } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { SHOW_RECENTLY_ADDED } from "./RecentAlbums";
import { QueryContext } from "../../pages/collection";
import { GET_ALBUMS_LENGTH } from "./Pagination";

const DELETE_ALBUM = gql`
  mutation DELETE_ALBUM($id: String!) {
    deleteAlbum(id: $id) {
      message
    }
  }
`;

const DeleteButton = ({ id }) => {
  const page = useContext(QueryContext);
  const query = {
    query: SHOW_RECENTLY_ADDED,
    variables: { last: 10 * (page || 1) }
  };
  return (
    <Mutation
      mutation={DELETE_ALBUM}
      variables={{ id }}
      refetchQueries={[query, { query: GET_ALBUMS_LENGTH }]}
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
