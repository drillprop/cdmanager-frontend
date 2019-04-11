import gql from 'graphql-tag';

export const GET_ALBUMS_FROM_LASTFM = gql`
  query GET_ALBUMS_FROM_LASTFM($search: String!) {
    albumslastfm(search: $search) {
      title
      artist
      image
    }
  }
`;

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

export const FILTER_ALBUMS = gql`
  query FILTER_ALBUMS($search: String!) {
    albumsCollection(search: $search) {
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
