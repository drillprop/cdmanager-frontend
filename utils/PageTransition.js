import React from 'react';
import { useSpring, animated } from 'react-spring';

const PageTransition = ({ children }) => {
  const props = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });
  return <animated.div style={props}>{children}</animated.div>;
};

export default PageTransition;
