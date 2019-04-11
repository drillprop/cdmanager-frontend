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

export const GET_ALBUMS_FROM_COLLECTION = gql`
  query GET_ALBUMS_FROM_COLLECTION($last: Int, $search: String) {
    albums(last: $last, search: $search) {
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
