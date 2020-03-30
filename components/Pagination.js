import Link from 'next/link';
import React, { useContext } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { QueryContext } from '../pages/collection';
import { GET_ALBUMS_LENGTH } from '../utils/queries';
import { CollectionContext } from './CollectionContainer';

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

const StyledSearching = styled.h2`
  max-width: 300px;
  margin: 3rem auto;
  text-align: center;
`;

const Pagination = () => {
  const pageContext = useContext(QueryContext);
  const { state, dispatch } = useContext(CollectionContext);
  const page = parseInt(pageContext) || 1;
  if (state.queryVariables.search)
    return (
      <StyledSearching>
        Searching for {state.queryVariables.search}
      </StyledSearching>
    );
  return (
    <Query query={GET_ALBUMS_LENGTH}>
      {({ data, loading, error }) => {
        if (error) return null;
        if (data?.albums) {
          const pages = Math.ceil(data.albums.total / 10);
          return (
            <StyledPagination>
              <Link
                href={{
                  pathname: 'collection',
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
                  pathname: 'collection',
                  query: {
                    page: page + 1
                  }
                }}
              >
                <a aria-disabled={page >= pages}> Next &gt; </a>
              </Link>
            </StyledPagination>
          );
        } else {
          return null;
        }
      }}
    </Query>
  );
};
export default Pagination;
