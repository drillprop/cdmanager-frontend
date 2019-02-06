import React, { Component } from "react";
import styled from "styled-components";
import { black, lightblack, lighterblack } from "../utils/colors";
import { robo, mont } from "../utils/fonts";

import Cd from "./Cd";

const Container = styled.div`
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 300ms;
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
    content: "";
    top: 50%;
    transform: translateY(-50%);
    width: 10rem;
    height: 1px;
    background: black;
  }
  ::before {
    position: absolute;
    content: "";
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

class RecentCds extends Component {
  state = {};
  render() {
    const { show } = this.props;
    return (
      <Container show={show}>
        <StyledH2>recently added</StyledH2>
        <CdContainer>
          <Cd />
          <Cd />
          <Cd />
          <Cd />
        </CdContainer>
      </Container>
    );
  }
}

export default RecentCds;
