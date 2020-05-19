import Link from 'next/link';
import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { useCollectionContext } from '../../contexts/collection/CollectionProvider';
import { GET_ALBUMS_LENGTH } from '../../utils/queries';

const StyledPagination = styled.div`
  font-size: 14px;
  max-width: 280px;
  white-space: nowrap;
  margin: 3rem auto;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  a {
    cursor: pointer;
    span {
      font-weight: bold;
    }
  }
  a[aria-disabled='true'] {
    pointer-events: none;
  }
`;

const Pagination = () => {
  const { page: pageContext } = useCollectionContext();
  const page = parseInt(pageContext) || 1;
  return (
    <Query query={GET_ALBUMS_LENGTH} fetchPolicy='cache-and-network'>
      {({ data, error }) => {
        if (error) return null;
        if (!data?.albums?.total) return <StyledPagination />;
        const pages = Math.ceil(data.albums.total / 9) || 1;
        return (
          <StyledPagination>
            <Link
              href={{
                pathname: 'collection',
                query: {
                  page: page - 1,
                },
              }}
            >
              <a aria-disabled={page < 2}>
                <span>&lt;</span> prev
              </a>
            </Link>
            <div>
              page {page} of {pages}
            </div>
            <Link
              href={{
                pathname: 'collection',
                query: {
                  page: page + 1,
                },
              }}
            >
              <a aria-disabled={page >= pages}>
                next <span>&gt;</span>
              </a>
            </Link>
          </StyledPagination>
        );
      }}
    </Query>
  );
};
export default Pagination;
