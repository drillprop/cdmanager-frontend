import React from 'react';
import User from '../../utils/User';
import NavLinksLogged from './NavLinksLogged';
import NavLinksLoggedOut from './NavLinksLoggedOut';

const NavLinks = () => {
  return (
    <User>
      {({ me }, signout) =>
        me ? (
          <NavLinksLogged me={me} signout={signout} />
        ) : (
          <NavLinksLoggedOut />
        )
      }
    </User>
  );
};

export default NavLinks;
