import gql from 'graphql-tag';

export const CREATE_ALBUM = gql`
  mutation CREATE_ALBUM($title: String!, $artist: String!, $image: String) {
    createAlbum(title: $title, artist: $artist, image: $image) {
      title
      artist
      image
      id
    }
  }
`;

export const RATE_ALBUM = gql`
  mutation RATE_ALBUM($id: String!, $value: Int, $review: String) {
    rateAlbum(id: $id, value: $value, review: $review) {
      message
    }
  }
`;
