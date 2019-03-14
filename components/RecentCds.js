import React, { Component } from 'react';
import styled from 'styled-components';
import { lightblack } from '../utils/colors';
import { robo } from '../utils/fonts';
import Cd from './Cd';
import { useSpring, animated } from 'react-spring';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Loading from '../elements/Loading';

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

const StyledH2 = styled.h2``;
const CdContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
`;

const RecentCds = () => {
  const props = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.7)' }
  });
  return (
    <animated.div style={props}>
      <StyledH2>recently added</StyledH2>
      <CdContainer>
        <Query
          query={SHOW_RECENTLY_ADDED}
          variables={{ last: 20 }}
          fetchPolicy='cache-and-network'
        >
          {({ data, error, loading }) => {
            if (error) return <div>{error.message}</div>;
            if (loading) return <Loading loading={loading} />;
            const { albums } = data;
            if (albums) {
              return albums.map(({ artist, title, image, id }) => (
                <Cd artist={artist} title={title} image={image} key={id} />
              ));
            }
            return <p>no albums added</p>;
          }}
        </Query>
      </CdContainer>
    </animated.div>
  );
};

export default RecentCds;
