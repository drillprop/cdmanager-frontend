import React, { useContext } from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import LoadedImage from '../../../elements/LoadedImage';
import { CREATE_ALBUM } from '../../../utils/mutations';
import { GET_ALBUMS_FROM_COLLECTION } from '../../../utils/queries';
import { AddContext } from '../AddContainer';

const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 1rem;
`;

const ImageWrapper = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid #909090;
  border-radius: 3px;
  img {
    object-fit: cover;
    max-width: 70px;
    max-height: 70px;
  }
`;

const AlbumSearchResult = ({ artist, title, image }) => {
  const { state, dispatch } = useContext(AddContext);
  return (
    <Item>
      <ImageWrapper>
        <LoadedImage title={title} image={image} />
      </ImageWrapper>
      <div>
        <div>{artist}</div>
        <div>{title}</div>
      </div>
      <Mutation
        mutation={CREATE_ALBUM}
        variables={{ artist, title, image }}
        refetchQueries={[
          { query: GET_ALBUMS_FROM_COLLECTION, variables: { last: 4 } }
        ]}
      >
        {(createAlbum, payload) => {
          return (
            <button
              disabled={payload.called}
              onClick={() => {
                createAlbum();
                dispatch({ type: 'CREATE_ALBUM' });
              }}
            >
              add
            </button>
          );
        }}
      </Mutation>
    </Item>
  );
};

export default AlbumSearchResult;
