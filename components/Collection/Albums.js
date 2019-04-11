import React, { useContext } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Loading from '../../elements/Loading';
import { QueryContext } from '../../pages/collection';
import { GET_ALBUMS_FROM_COLLECTION } from '../../utils/queries';
import Album from '../Album';
import DeleteButton from './DeleteButton';

const StyledH2 = styled.h2`
  text-align: center;
`;
const CdContainer = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
`;

const Albums = () => {
  const page = useContext(QueryContext);
  return (
    <>
      <StyledH2>recently added</StyledH2>
      <CdContainer>
        <Query
          query={GET_ALBUMS_FROM_COLLECTION}
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
                  <DeleteButton id={id} />
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

export default Albums;
