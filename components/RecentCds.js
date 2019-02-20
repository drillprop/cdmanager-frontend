import React, { Component } from 'react';
import styled from 'styled-components';
import { lightblack } from '../utils/colors';
import { robo } from '../utils/fonts';
import Cd from './Cd';
import { useSpring, animated } from 'react-spring';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const SHOW_RECENTLY_ADDED = gql`
  query SHOW_RECENTLY_ADDED($last: Int) {
    albums(last: $last) {
      title
      artist
      image
      id
    }
  }
`;

const StyledH2 = styled.h2`
  position: relative;
  text-align: center;
  margin: 2rem 1rem;
  color: ${lightblack};
  font-family: ${robo};
  font-size: 1.2rem;
  ::after {
    position: absolute;
    margin-left: 1rem;
    content: '';
    top: 50%;
    transform: translateY(-50%);
    width: 10rem;
    height: 1px;
    background: black;
  }
  ::before {
    position: absolute;
    content: '';
    margin-left: -11rem;
    top: 50%;
    border-radius: 4px;
    transform: translateY(-50%);
    width: 10rem;
    height: 1px;
    background: black;
  }
`;
const CdContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
        <Query query={SHOW_RECENTLY_ADDED} variables={{ last: 4 }}>
          {({ data, error, loading }) => {
            console.log(data.albums);
            if (error) return <div>{error.message}</div>;
            if (loading) return <div>Loading...</div>;
            const { albums } = data;
            return albums.map(({ artist, title, image, id }) => (
              <Cd artist={artist} title={title} image={image} key={id} />
            ));
          }}
        </Query>
      </CdContainer>
    </animated.div>
  );
};

export default RecentCds;
