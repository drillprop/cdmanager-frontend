import debounce from 'lodash.debounce';
import React, { useEffect, useState, useContext } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { PageTitle } from '../../elements/Titles';
import { mont } from '../../utils/fonts';
import { GET_ALBUMS_FROM_LASTFM } from '../../utils/queries';
import { theme } from '../../utils/theme';
import AlbumSearchList from './AlbumSearchList';
import { AddContext } from './AddContainer';

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 700px;
  input {
    position: relative;
    z-index: 1;
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
    @media (max-width: 510px) {
      width: 230px;
      height: 40px;
    }
  }
`;

const SearchAlbumToAdd = () => {
  const { state, dispatch } = useContext(AddContext);

  const [result, setResult] = useState('');

  useEffect(() => {
    return () => handleSearch.cancel();
  }, []);

  const handleSearch = debounce(text => {
    dispatch({ type: 'SEARCH_ALBUM', searchInput: text });
    !text && setResult('');
  }, 300);

  return (
    <>
      <PageTitle>add an album</PageTitle>
      <StyledForm displayRecent={!state.isListVisible}>
        <input
          type='text'
          value={result}
          placeholder='search...'
          onChange={e => {
            const { value } = e.currentTarget;
            setResult(value);
            handleSearch(value);
          }}
        />
      </StyledForm>
      {state.isListVisible && (
        <Query query={GET_ALBUMS_FROM_LASTFM} variables={{ search: result }}>
          {({ loading, error, data }) => {
            return (
              <AlbumSearchList
                searchResult={data}
                loading={loading}
                error={error}
              />
            );
          }}
        </Query>
      )}
    </>
  );
};

export default SearchAlbumToAdd;
