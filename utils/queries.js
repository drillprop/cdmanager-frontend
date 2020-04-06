import gql from 'graphql-tag';

export const GET_ALBUMS_FROM_LASTFM = gql`
  query GET_ALBUMS_FROM_LASTFM($search: String!) {
    albumslastfm(search: $search) {
      title
      artist
      imageLarge
      imageSmall
    }
  }
`;

export const GET_ALBUMS_FROM_COLLECTION = gql`
  query GET_ALBUMS_FROM_COLLECTION($skip: Int, $search: String, $limit: Int) {
    albums(skip: $skip, search: $search, limit: $limit) {
      albums {
        title
        artist
        image
        id
      }
    }
  }
`;

export const GET_ALBUMS_LENGTH = gql`
  query GET_ALBUMS_LENGTH {
    albums {
      total
    }
  }
`;
