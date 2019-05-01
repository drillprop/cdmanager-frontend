import React from 'react';
import User from '../../utils/User';
import Link from 'next/link';

const NavLinks = ({ setToggle }) => {
  const toggle = () => {
    if (!setToggle) {
      return null;
    }
    setToggle(false);
  };
  return (
    <User>
      {({ me }, signout) =>
        me ? (
          <ul>
            <li onClick={() => toggle()}>
              <Link href='/login'>
                <a onClick={signout}>logout</a>
              </Link>
            </li>
            <li onClick={() => toggle()}>
              <Link href='/add'>
                <a>add</a>
              </Link>
            </li>
            <li onClick={() => toggle()}>
              <Link href='/collection'>
                <a>{me.name}</a>
              </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li onClick={() => toggle()}>
              <Link href='/login'>
                <a>login</a>
              </Link>
            </li>
            <li onClick={() => toggle()}>
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
