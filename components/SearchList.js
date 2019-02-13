import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';
import { useSpring, animated } from 'react-spring';

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
const Item = styled.li`
  display: flex;
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

const SearchList = ({ searchResult }) => {
  const smth = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <List style={smth}>
      {searchResult &&
        searchResult.map(({ artist, title, image }) => {
          return (
            <Item key={artist + title}>
              <ImageWrapper>
                <img src={image} alt='title' />
              </ImageWrapper>
              <div>
                <div>{artist}</div>
                <div>{title}</div>
              </div>
            </Item>
          );
        })}
    </List>
  );
};

export default SearchList;
