import React from 'react';
import Link from 'next/link';

const NavLinksLoggedOut = () => {
  return (
    <ul>
      <li>
        <Link href='/login'>
          <a>login</a>
        </Link>
      </li>
      <li>
        <Link href='/register'>
          <a>Register</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinksLoggedOut;
