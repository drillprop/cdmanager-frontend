import React from 'react';
import User from '../../utils/User';
import Link from 'next/link';

const NavLinks = () => {
  return (
    <User>
      {(data, signout) =>
        data && data.me ? (
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
                <a>{data.me.name}</a>
              </Link>
            </li>
          </ul>
        ) : (
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
        )
      }
    </User>
  );
};

export default NavLinks;
