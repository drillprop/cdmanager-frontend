import debounce from 'lodash.debounce';
import Link from 'next/link';
import React, { useState } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { useCollectionContext } from '../../../contexts/collection/CollectionProvider';
import Button from '../../../styles/Button';
import { Input } from '../../../styles/Form';
import { GET_ALBUMS_FROM_COLLECTION } from '../../../utils/queries';
import Album from '../../Album/Album';
import Error from '../../Error/Error';
import Loading from '../../Loading/Loading';
import DeleteButton from './collectionAlbums/DeleteButton';

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
  grid-template-columns: repeat(auto-fit, minmax(120px, 200px));
  gap: 50px 20px;
  justify-content: center;
  justify-items: center;
`;

const SingleAlbumWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 10px;
`;

const NoAlbumsPar = styled.p`
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 30px;
  text-align: center;
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
      <Query
        query={GET_ALBUMS_FROM_COLLECTION}
        variables={{
          ...state.queryVariables,
          skip: 9 * (page || 1) - 9,
        }}
        fetchPolicy='cache-and-network'
      >
        {({ data, error, loading, variables }) => {
          if (error) return <Error error={error} />;
          if (loading) return <Loading loading={loading} />;
          if (data?.albums?.albums) {
            const { albums, total } = data.albums;
            if (!total)
              return (
                <>
                  <NoAlbumsPar>no albums added yet</NoAlbumsPar>
                  <Button small center>
                    <Link href={'/add'}>
                      <a> click here to add one</a>
                    </Link>
                  </Button>
                </>
              );
            return (
              <>
                <Input
                  type='text'
                  placeholder='filter'
                  onChange={(e) => filter(e.target.value)}
                />
                <StyledH2>
                  {result ? `searching for ${result}` : 'recently added'}
                </StyledH2>
                <CdsWrapper>
                  {albums.map(({ artist, title, image, id }) => (
                    <SingleAlbumWrapper key={id}>
                      <Album
                        artist={artist}
                        title={title}
                        image={image}
                        id={id}
                      />
                      <DeleteButton id={id} variables={variables} />
                    </SingleAlbumWrapper>
                  ))}
                </CdsWrapper>
              </>
            );
          }
        }}
      </Query>
    </Wrapper>
  );
};

export default CollectionAlbums;
