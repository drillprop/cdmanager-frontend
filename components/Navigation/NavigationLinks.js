import React from 'react';
import Link from 'next/link';
import User from '../../utils/User';

const NavigationLinks = () => {
  return (
    <User>
      {({ me }, signout) => (
        <ul>
          <li>
            {me ? (
              <Link href='/login'>
                <a onClick={signout}>logout</a>
              </Link>
            ) : (
              <Link href='/login'>
                <a>login</a>
              </Link>
            )}
          </li>
          {me && (
            <li>
              <Link href='/add'>
                <a>add</a>
              </Link>
            </li>
          )}
          <li>
            {me ? (
              <Link href='/collection'>
                <a>{me.name}</a>
              </Link>
            ) : (
              <Link href='/register'>
                <a>Register</a>
              </Link>
            )}
          </li>
        </ul>
      )}
    </User>
  );
};

export default NavigationLinks;
