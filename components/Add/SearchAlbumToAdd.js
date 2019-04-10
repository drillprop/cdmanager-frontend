import debounce from "lodash.debounce";
import React, { useEffect, useState } from "react";
import { Query } from "react-apollo";
import styled from "styled-components";
import { lightblack } from "../../utils/colors";
import { mont, robo } from "../../utils/fonts";
import { GET_ALBUMS_FROM_LASTFM } from "../../utils/queries";
import { theme } from "../../utils/theme";
import AlbumSearchList from "./AlbumSearchList";
import { PageTitle } from "../../elements/PageTitle";

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
    transform: ${({ displayRecent }) => (displayRecent ? "" : "scale(1.3)")};
    transition: all 300ms;
  }
`;

const SearchAlbumToAdd = ({ setToVisible }) => {
  const [result, setResult] = useState("");

  useEffect(() => {
    return () => handleSearch.cancel();
  }, []);

  const handleSearch = debounce(text => {
    setResult(text);
    !text && setResult("");
  }, 300);
  return (
    <>
      <PageTitle>add an album</PageTitle>
      <StyledForm displayRecent={!result}>
        <input
          type='text'
          placeholder='search...'
          onChange={e => {
            const { value } = e.currentTarget;
            value ? setToVisible(false) : setToVisible(true);
            handleSearch(value);
          }}
        />
      </StyledForm>
      {result && (
        <Query query={GET_ALBUMS_FROM_LASTFM} variables={{ search: result }}>
          {({ loading, error, data }) => {
            return (
              <AlbumSearchList
                searchResult={data}
                loading={loading}
                error={error}
              />
            );
          }}
        </Query>
      )}
    </>
  );
};

export default SearchAlbumToAdd;
