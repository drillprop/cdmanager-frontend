import gql from "graphql-tag";

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
