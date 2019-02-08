import React from "react";
import styled from "styled-components";
import { theme } from "../utils/theme";
import { useSpring, animated } from "react-spring";

const List = styled(animated.ul)`
  position: relative;
  z-index: 2;
  margin: 0.4rem auto;
  background: white;
  width: calc(1.3 * 500px);
  border: 1px solid #909090;
  border-radius: 3px;
  box-shadow: ${theme.bs};
`;

const SearchList = () => {
  const smth = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <List style={smth}>
      <li>smth</li>
      <li>sdasd</li>
      <li>sadas</li>
    </List>
  );
};

export default SearchList;
