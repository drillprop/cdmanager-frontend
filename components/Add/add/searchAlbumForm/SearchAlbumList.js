import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../utils/theme';
import SearchAlbumItem from './SearchAlbumItem';
import Loading from '../../../Loading/Loading';

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

const SearchAlbumList = ({ albumslastfm, loading, error }) => {
  if (loading) {
    return (
      <List>
        <Loading loading={loading} />
      </List>
    );
  }
  if (error) {
    return (
      <List>
        <NoAlbumsPar>Failed to fetch data</NoAlbumsPar>
      </List>
    );
  }
  const uniqueSearchResult = Array.from(new Set(albumslastfm));
  return (
    <List>
      {uniqueSearchResult.length ? (
        uniqueSearchResult.map(({ artist, title, imageSmall, imageLarge }) => {
          return (
            <SearchAlbumItem
              artist={artist}
              title={title}
              imageSmall={imageSmall}
              imageLarge={imageLarge}
              key={title + artist}
            />
          );
        })
      ) : (
        <NoAlbumsPar> no albums found...</NoAlbumsPar>
      )}
    </List>
  );
};

export default SearchAlbumList;
