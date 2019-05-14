import React from 'react';
import Album from './Album';
import DeleteButton from './DeleteButton';
import styled from 'styled-components';

const CdWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
`;

const Albums = ({ albums, deleteButton }) => {
  return (
    <CdWrapper>
      {albums
        ? albums.map(({ artist, title, image, id }) => (
            <Album artist={artist} title={title} image={image} key={id} id={id}>
              {deleteButton && <DeleteButton id={id} />}
            </Album>
          ))
        : null}
    </CdWrapper>
  );
};
export default Albums;
