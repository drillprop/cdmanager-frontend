import React from 'react';
import User from '../../utils/User';
import Navigation from './Navigation';
import HamburgerMenu from './HamburgerMenu';

const NavigationContainer = () => {
  return (
    <User>
      {({ me }, signout) => (
        <>
          <HamburgerMenu me={me} signout={signout} />
          <Navigation me={me} signout={signout} />
        </>
      )}
    </User>
  );
};

export default NavigationContainer;
