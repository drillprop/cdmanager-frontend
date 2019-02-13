import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';
import { useSpring, animated } from 'react-spring';
import CdResult from './CdResult';

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

const SearchList = ({ searchResult }) => {
  const smth = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <List style={smth}>
      {searchResult &&
        searchResult.map(({ artist, title, image }) => {
          return (
            <CdResult
              artist={artist}
              title={title}
              image={image}
              key={artist + title}
            />
          );
        })}
    </List>
  );
};

export default SearchList;
