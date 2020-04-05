import React, { useState } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { useCollectionContext } from '../../../contexts/collection/CollectionProvider';
import Loading from '../../Loading/Loading';
import { GET_ALBUMS_FROM_COLLECTION } from '../../../utils/queries';
import Album from '../../Album/Album';
import DeleteButton from './collectionAlbums/DeleteButton';
import Error from '../../Error/Error';
import debounce from 'lodash.debounce';
import { Input } from '../../../styles/Form';

const Wrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  input {
    display: block;
    margin: 0 auto;
  }
`;

const StyledH2 = styled.h2`
  margin-top: 30px;
  text-align: center;
`;

const CdsWrapper = styled.div`
  max-width: 800px;
  margin: 60px 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 50px;
  justify-content: center;
  justify-items: center;
`;

const CollectionAlbums = () => {
  const { page, state, dispatch } = useCollectionContext();
  const [result, setValue] = useState('');

  const filter = debounce((text) => {
    text = text.trim();
    dispatch({
      type: 'CHANGE_QUERY_VARIABLES',
      search: text,
    });
    !text && setValue('');
    return setValue(text);
  }, 300);

  return (
    <Wrapper>
      <Input
        type='text'
        placeholder='filter'
        onChange={(e) => filter(e.target.value)}
      />
      <StyledH2>
        {result ? `searching for ${result}` : 'recently added'}
      </StyledH2>
      <Query
        query={GET_ALBUMS_FROM_COLLECTION}
        variables={{
          ...state.queryVariables,
          skip: 10 * (page || 1) - 10,
        }}
        fetchPolicy='cache-and-network'
      >
        {({ data, error, loading, variables }) => {
          if (error) return <Error error={error} />;
          if (loading) return <Loading loading={loading} />;
          if (data?.albums?.albums) {
            const { albums } = data.albums;
            return (
              <CdsWrapper>
                {albums.map(({ artist, title, image, id }) => (
                  <Album
                    artist={artist}
                    title={title}
                    image={image}
                    key={id}
                    id={id}
                  >
                    <DeleteButton id={id} variables={variables} />
                  </Album>
                ))}
              </CdsWrapper>
            );
          }
          return <p>no albums added</p>;
        }}
      </Query>
    </Wrapper>
  );
};

export default CollectionAlbums;
