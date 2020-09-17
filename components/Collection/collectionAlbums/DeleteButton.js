import gql from 'graphql-tag';
import React from 'react';
import { useMutation } from 'react-apollo';
import styled from 'styled-components';
import { background, black } from '../../../utils/colors';
import {
  GET_ALBUMS_FROM_COLLECTION,
  GET_ALBUMS_LENGTH,
} from '../../../utils/queries';
import Icon from '../../Icon/Icon';

const StyledButton = styled.button`
  position: absolute;
  cursor: pointer;
  margin-left: 130px;
  margin-top: -20px;
  background: ${background};
  padding: 10px 10px;
  color: ${black};
  border-radius: 50%;
  border: none;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  transition: 200ms;
  :hover {
    transform: scale(1.1);
    background-color: #222;
    svg {
      stroke: white;
      fill: white;
    }
  }

  svg {
    width: 1em;
    height: 1em;
    display: inline-block;
    vertical-align: middle;
    animation: ${(props) =>
      props.isDeleting ? 'mymove 1.5s linear infinite;' : ''};
  }

  @keyframes mymove {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const DELETE_ALBUM = gql`
  mutation DELETE_ALBUM($id: String!) {
    deleteAlbum(id: $id) {
      message
    }
  }
`;

const DeleteButton = ({ id, variables }) => {
  const [deleteAlbum, { loading }] = useMutation(DELETE_ALBUM, {
    variables: { id },
    refetchQueries: [
      { query: GET_ALBUMS_FROM_COLLECTION, variables },
      { query: GET_ALBUMS_LENGTH },
    ],
  });
  return (
    <StyledButton
      isDeleting={loading}
      onClick={() => {
        deleteAlbum();
      }}
    >
      <Icon icon={'delete'} color={black} />
    </StyledButton>
  );
};

export default DeleteButton;
