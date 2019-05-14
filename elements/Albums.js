import styled from 'styled-components';
import React from 'react';
import Album from './Album';
import DeleteButton from './DeleteButton';

const CdContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 1rem;
`;

const Albums = ({ albums, deleteButton }) => {
  return (
    <CdContainer>
      {albums
        ? albums.map(({ artist, title, image, id }) => (
            <Album artist={artist} title={title} image={image} key={id} id={id}>
              {deleteButton && <DeleteButton id={id} />}
            </Album>
          ))
        : null}
    </CdContainer>
  );
};
export default Albums;
