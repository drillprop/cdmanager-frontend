import React, { Component } from 'react';
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

export default class AddCd extends Component {
  state = {
    displayRecent: true,
    result: ''
  };

  handleChange = e => {
    const { value: result } = e.currentTarget;
    result
      ? this.setState({ displayRecent: false, result })
      : this.setState({ displayRecent: true, result: '' });
  };

  render() {
    const { displayRecent, searchResult, result } = this.state;
    return (
      <StyledMain>
        <StyledH1>add an album</StyledH1>
        <StyledForm displayRecent={displayRecent}>
          <input
            type='text'
            placeholder='search...'
            onChange={this.handleChange}
          />
        </StyledForm>
        {result && (
          <Query query={GET_ALBUMS} variables={{ search: result }}>
            {({ loading, error, data }) => {
              if (loading) return null;
              if (error) return `Error!: ${error}`;
              return <SearchList searchResult={data.albums} />;
            }}
          </Query>
        )}

        {displayRecent && <RecentCds />}
      </StyledMain>
    );
  }
}
