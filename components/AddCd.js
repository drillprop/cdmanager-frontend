import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { robo, mont } from '../utils/fonts';
import { lightblack } from '../utils/colors';
import { theme } from '../utils/theme';
import RecentCds from './RecentCds';
import SearchList from './SearchList';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_ALBUMS = gql`
  query GET_ALBUMS($search: String!) {
    albums(search: $search) {
      title
      artist
      image
      id
    }
  }
`;

const StyledMain = styled.div`
  img {
    display: block;
    max-height: 90px;
    margin: 0 auto;
  }
`;

const StyledH1 = styled.h1`
  text-align: center;
  font-family: ${robo};
  font-weight: 900;
  font-size: 3rem;
  letter-spacing: -1px;
  color: ${lightblack};
  margin-bottom: 2rem;
  margin-top: 3rem;
`;
const StyledForm = styled.form`
  margin: 0 auto;
  width: 700px;
  input {
    position: relative;
    z-index: 1;
    margin: 0 auto;
    display: block;
    width: 500px;
    height: 50px;
    outline: none;
    background: white;
    border: 1px solid #909090;
    padding: 0 28px;
    border-radius: 3px;
    font-family: ${mont};
    font-size: 1rem;
    box-shadow: ${theme.bs};
    transform: ${({ displayRecent }) => (displayRecent ? '' : 'scale(1.3)')};
    transition: all 300ms;
  }
`;

const AddCd = () => {
  const [result, setResult] = useState('');
  let timeout = 0;

  const handleSearch = e => {
    const { value: result } = e.currentTarget;
    if (timeout) clearTimeout(timeout);
    timeout =
      result &&
      setTimeout(() => {
        setResult(result);
      }, 300);
    !result && setResult('');
  };
  return (
    <StyledMain>
      <StyledH1>add an album</StyledH1>
      <StyledForm displayRecent={!result}>
        <input type='text' placeholder='search...' onKeyUp={handleSearch} />
      </StyledForm>
      {result && (
        <Query query={GET_ALBUMS} variables={{ search: result }}>
          {({ loading, error, data }) => {
            return (
              <SearchList
                searchResult={data.albums}
                loading={loading}
                error={error}
              />
            );
          }}
        </Query>
      )}

      {!result && <RecentCds />}
    </StyledMain>
  );
};

export default AddCd;
