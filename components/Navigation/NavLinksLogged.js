import React from 'react';
import Link from 'next/link';

const NavLinksLogged = ({ me, signout }) => {
  return (
    <ul>
      <li>
        <Link href='/login'>
          <a onClick={signout}>logout</a>
        </Link>
      </li>
      <li>
        <Link href='/add'>
          <a>add</a>
        </Link>
      </li>
      <li>
        <Link href='/collection'>
          <a>{me.name}</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinksLogged;
