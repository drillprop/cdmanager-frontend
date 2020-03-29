import gql from 'graphql-tag';
import React, { useContext } from 'react';
import { Mutation } from 'react-apollo';
import { QueryContext } from '../pages/collection';
import {
  GET_ALBUMS_LENGTH,
  GET_ALBUMS_FROM_COLLECTION
} from '../utils/queries';
import Icon from './Icon';
import { black, background } from '../utils/colors';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${background};
  color: ${black};
  border-radius: 5px;
  border: 1px solid ${black};
  font-size: 1rem;
  width: 7em;
`;

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
    query: GET_ALBUMS_FROM_COLLECTION,
    variables: { skip: 10 * (page || 1) - 10 }
  };
  return (
    <Mutation
      mutation={DELETE_ALBUM}
      variables={{ id }}
      refetchQueries={[query, { query: GET_ALBUMS_LENGTH }]}
    >
      {(deleteAlbum, payload) => {
        return (
          <StyledButton
            onClick={() => {
              deleteAlbum();
            }}
          >
            <Icon icon={'delete'} color={black} />
            {payload.called ? 'deleting...' : 'delete'}
          </StyledButton>
        );
      }}
    </Mutation>
  );
};

export default DeleteButton;
