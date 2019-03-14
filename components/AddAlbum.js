import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { robo, mont } from '../utils/fonts';
import { lightblack } from '../utils/colors';
import { theme } from '../utils/theme';
import RecentAlbums from './RecentAlbums';
import AlbumSearchList from './AlbumSearchList';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';

const GET_ALBUMS_FROM_LASTFM = gql`
  query GET_ALBUMS_FROM_LASTFM($search: String!) {
    albumslastfm(search: $search) {
      title
      artist
      image
    }
  }
`;

const StyledMain = styled.div`
  img {
    display: block;
    max-height: 90px;
    margin: 0 auto;
  }
`;

const StyledH1 = styled.h1`
  text-align: center;
  font-family: ${robo};
  font-weight: 900;
  font-size: 3rem;
  letter-spacing: -1px;
  color: ${lightblack};
  margin: 0;
  margin-bottom: 2rem;
`;
const StyledForm = styled.form`
  margin: 0 auto;
  width: 700px;
  input {
    position: relative;
    z-index: 1;
    margin: 0 auto;
    display: block;
    width: 500px;
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
  }
`;

const AddAlbum = () => {
  const [result, setResult] = useState('');

  useEffect(() => {
    return () => handleSearch.cancel();
  }, []);

  const handleSearch = debounce(text => {
    setResult(text);
    !text && setResult('');
  }, 300);

  return (
    <StyledMain>
      <StyledH1>add an album</StyledH1>
      <StyledForm displayRecent={!result}>
        <input
          type='text'
          placeholder='search...'
          onChange={e => handleSearch(e.currentTarget.value)}
        />
      </StyledForm>
      {result && (
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

      {!result && <RecentAlbums />}
    </StyledMain>
  );
};

export default AddAlbum;
