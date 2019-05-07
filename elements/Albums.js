import styled from 'styled-components';
import React from 'react';
import Album from './Album';
import DeleteButton from './DeleteButton';

const CdContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Albums = ({ albums, deleteButton }) => {
  return (
    <CdContainer>
      {albums.map(({ artist, title, image, id }) => (
        <Album artist={artist} title={title} image={image} key={id} id={id}>
          {deleteButton && <DeleteButton id={id} />}
        </Album>
      ))}
    </CdContainer>
  );
};
export default Albums;
