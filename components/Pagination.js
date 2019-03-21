import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledPagination = styled.div`
  max-width: 300px;
  margin: 3rem auto;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const Pagination = ({ page }) => {
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
        <a> &lt; Prev </a>
      </Link>
      <div>Page {page} of 1</div>
      <Link
        href={{
          pathname: 'dashboard',
          query: {
            page: page + 1
          }
        }}
      >
        <a> Next &gt; </a>
      </Link>
    </StyledPagination>
  );
};
export default Pagination;
