import React, { useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { QueryContext } from '../pages/dashboard';

export const GET_ALBUMS_LENGTH = gql`
  query GET_ALBUMS_LENGTH {
    albumsLength
  }
`;

const StyledPagination = styled.div`
  max-width: 300px;
  margin: 3rem auto;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  a[aria-disabled='true'] {
    pointer-events: none;
  }
`;

const Pagination = () => {
  const pageContext = useContext(QueryContext);
  const page = parseInt(pageContext) || 1;
  return (
    <Query query={GET_ALBUMS_LENGTH}>
      {({ data, loading, error }) => {
        const { albumsLength } = data;
        const pages = Math.ceil(albumsLength / 10);
        return (
          <StyledPagination>
            <Link
              href={{
                pathname: 'dashboard',
                query: {
                  page: page - 1
                }
              }}
            >
              <a aria-disabled={page < 2}> &lt; Prev </a>
            </Link>
            <div>
              Page {page} of {pages}
            </div>
            <Link
              href={{
                pathname: 'dashboard',
                query: {
                  page: page + 1
                }
              }}
            >
              <a aria-disabled={page >= pages}> Next &gt; </a>
            </Link>
          </StyledPagination>
        );
      }}
    </Query>
  );
};
export default Pagination;
