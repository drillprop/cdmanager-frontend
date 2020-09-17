import debounce from 'lodash.debounce';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo';
import styled from 'styled-components';
import { useAddContext } from '../../contexts/add/AddProvider';
import { PageTitle } from '../../styles/Titles';
import { mont } from '../../utils/fonts';
import { GET_ALBUMS_FROM_LASTFM } from '../../utils/queries';
import { theme } from '../../utils/theme';
import Loading from '../Loading/Loading';
import SearchAlbumItem from './addAlbumForm/SearchAlbumItem';

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 700px;
  input {
    position: relative;
    margin: 0 auto;
    display: block;
    width: 400px;
    height: 50px;
    outline: none;
    background: white;
    border: 1px solid #909090;
    padding: 0 28px;
    border-radius: 3px;
    font-family: ${mont};
    font-size: 1rem;
    box-shadow: ${theme.bs};
    transform: ${({ displayRecent }) => (displayRecent ? '' : 'scale(1.3)')};
    transition: all 300ms;
    @media (max-width: 600px) {
      width: 230px;
      height: 40px;
    }
  }
`;

const List = styled.ul`
  position: relative;
  margin: 0.4rem auto;
  background: white;
  width: calc(1.3 * 400px);
  border: 1px solid #909090;
  border-radius: 3px;
  box-shadow: ${theme.bs};
  list-style: none;
  padding: 0;
  @media (max-width: 600px) {
    width: calc(1.3 * 230px);
  }
`;

const NoAlbumsPar = styled.p`
  font-style: italic;
  font-size: 16px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddAlbumForm = () => {
  const { state, dispatch } = useAddContext();
  const [result, setResult] = useState('');
  const { loading, error, data } = useQuery(GET_ALBUMS_FROM_LASTFM, {
    variables: {
      search: state.searchInput,
    },
  });

  useEffect(() => {
    debouncedSearch(result);
    return () => debouncedSearch.cancel();
  }, [result]);

  const debouncedSearch = debounce((text) => {
    dispatch({ type: 'SEARCH_ALBUM', searchInput: text });
  }, 500);

  const uniqueSearchResult =
    data && data.albumslastfm && Array.from(new Set(data.albumslastfm));

  return (
    <>
      <PageTitle>add an album</PageTitle>
      <StyledForm displayRecent={!state.isListVisible}>
        <input
          type='search'
          placeholder='search...'
          value={state.clearInput ? '' : result}
          onChange={(e) => {
            dispatch({ type: 'CLEAR_INPUT', clearInput: false });
            setResult(e.currentTarget.value);
          }}
        />
        {state.isListVisible && (
          <List>
            {loading && <Loading loading={loading} />}
            {error && <NoAlbumsPar>Failed to fetch data</NoAlbumsPar>}
            {uniqueSearchResult && uniqueSearchResult.length
              ? uniqueSearchResult.map(
                  ({ artist, title, imageSmall, imageLarge }) => (
                    <SearchAlbumItem
                      artist={artist}
                      title={title}
                      imageSmall={imageSmall}
                      imageLarge={imageLarge}
                      key={title + artist}
                    />
                  )
                )
              : null}

            {uniqueSearchResult && !uniqueSearchResult.length && (
              <NoAlbumsPar> no albums found...</NoAlbumsPar>
            )}
          </List>
        )}
      </StyledForm>
    </>
  );
};

export default AddAlbumForm;
