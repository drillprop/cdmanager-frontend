import React from 'react';
import User from '../../../utils/User';
import Link from 'next/link';
import { background, lighterblack } from '../../../utils/colors';
import Icon from '../../Icon/Icon';

const NavLinks = () => {
  return (
    <User>
      {(data, signout) =>
        data && data.me ? (
          <ul>
            <li>
              <Link href='/login'>
                <a onClick={signout}>
                  <Icon icon={'logout'} color={lighterblack} />
                  logout
                </a>
              </Link>
            </li>
            <li>
              <Link href='/add'>
                <a>
                  <Icon icon={'cd'} color={lighterblack} />
                  add cd
                </a>
              </Link>
            </li>
            <li>
              <Link href='/collection'>
                <a>
                  <Icon icon={'profile'} color={background} /> {data.me.name}
                </a>
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
