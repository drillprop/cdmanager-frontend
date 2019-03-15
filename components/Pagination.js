import React from 'react';
import styled from 'styled-components';

const StyledPagination = styled.div`
  max-width: 300px;
  margin: 3rem auto;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const Pagination = props => {
  console.log(props);
  return (
    <StyledPagination>
      <div> &lt; Prev </div>
      <div>Page 1 of 1</div>
      <div>Next &gt;</div>
    </StyledPagination>
  );
};
export default Pagination;
