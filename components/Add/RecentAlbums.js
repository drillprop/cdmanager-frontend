import React from "react";
import { Query } from "react-apollo";
import styled from "styled-components";
import Loading from "../../elements/Loading";
import { SHOW_RECENTLY_ADDED } from "../../utils/queries";
import Album from "../Album";

const StyledH2 = styled.h2`
  margin: 2rem 0;
  text-align: center;
`;
const CdContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
`;

const RecentAlbums = () => {
  return (
    <>
      <StyledH2>recently added</StyledH2>
      <CdContainer>
        <Query
          query={SHOW_RECENTLY_ADDED}
          variables={{ last: 4 }}
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
                />
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
