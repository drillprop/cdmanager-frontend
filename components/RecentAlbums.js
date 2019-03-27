import React, { useContext } from 'react';
import styled from 'styled-components';
import { lightblack } from '../utils/colors';
import { robo } from '../utils/fonts';
import Album from './Album';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Loading from '../elements/Loading';
import Pagination from './Pagination';
import { QueryContext } from '../pages/dashboard';
import DeleteButton from './DeleteButton';

export const SHOW_RECENTLY_ADDED = gql`
  query SHOW_RECENTLY_ADDED($last: Int) {
    albums(last: $last) {
      title
      artist
      image
      id
    }
  }
`;

export const GET_ALBUMS_LENGTH = gql`
  query GET_ALBUMS_LENGTH {
    albumsLength
  }
`;

const StyledH2 = styled.h2``;
const CdContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
`;

const RecentAlbums = () => {
  const page = useContext(QueryContext);
  return (
    <>
      <Query query={GET_ALBUMS_LENGTH}>
        {({ data: { albumsLength } }) => {
          return (
            <Pagination
              page={parseFloat(page) || 1}
              albumsLength={albumsLength ? albumsLength : 0}
            />
          );
        }}
      </Query>
      <StyledH2>recently added</StyledH2>
      <CdContainer>
        <Query
          query={SHOW_RECENTLY_ADDED}
          variables={{ last: 10 * (page || 1) }}
          fetchPolicy='cache-and-network'
        >
          {({ data, error, loading }) => {
            if (error) return <div>{error.message}</div>;
            if (loading) return <Loading loading={loading} />;
            const { albums } = data;
            if (albums) {
              return albums.map(({ artist, title, image, id }) => (
                <Album
                  artist={artist}
                  title={title}
                  image={image}
                  key={id}
                  id={id}
                >
                  <DeleteButton id={id} page={page} />
                </Album>
              ));
            }
            return <p>no albums added</p>;
          }}
        </Query>
      </CdContainer>
    </>
  );
};

export default RecentAlbums;
