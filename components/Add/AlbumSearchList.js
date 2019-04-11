import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme';
import { useSpring, animated } from 'react-spring';
import AlbumSearchResult from './AlbumSearchResult';

const List = styled(animated.ul)`
  position: relative;
  z-index: 2;
  margin: 0.4rem auto;
  background: white;
  width: calc(1.3 * 500px);
  border: 1px solid #909090;
  border-radius: 3px;
  box-shadow: ${theme.bs};
  list-style: none;
`;

const AlbumSearchList = ({ searchResult, loading, error }) => {
  const smth = useSpring({ opacity: 1, from: { opacity: 0 } });
  if (loading) {
    return (
      <List>
        <p>Loading...</p>
      </List>
    );
  }
  if (error) {
    return (
      <List>
        <p>Failed to fetch data</p>
      </List>
    );
  }
  const { albumslastfm } = searchResult;
  const uniqueSearchResult = Array.from(new Set(albumslastfm));
  return (
    <List style={smth}>
      {uniqueSearchResult &&
        uniqueSearchResult.map(({ artist, title, image }) => {
          return (
            <AlbumSearchResult
              artist={artist}
              title={title}
              image={image}
              key={title + artist}
            />
          );
        })}
    </List>
  );
};

export default AlbumSearchList;
