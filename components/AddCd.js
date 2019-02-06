import React, { Component } from "react";
import Cd from "./Cd";
import styled from "styled-components";
import { robo, mont } from "../utils/fonts";
import { black, lightblack, lighterblack } from "../utils/colors";

const StyledMain = styled.div`
  img {
    display: block;
    max-height: 90px;
    margin: 0 auto;
  }
`;

const StyledH1 = styled.h1`
  text-align: center;
  font-family: ${robo};
  font-weight: 800;
  font-size: 3rem;
  letter-spacing: -3px;
  color: ${lightblack};
  margin-bottom: 1rem;
  margin-top: 0;
`;
const StyledForm = styled.form`
  margin: 0 auto;
  width: 700px;
  input {
    margin: 0 auto;
    display: block;
    width: 500px;
    height: 50px;
    outline: none;
    background: white;
    border: 1px solid #909090;
    padding: 0 28px;
    border-radius: 3px;
    font-family: ${mont};
    font-size: 1rem;
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

export default class AddCd extends Component {
  render() {
    return (
      <StyledMain>
        <StyledH1>add an album</StyledH1>
        <img src="/static/cdinbox.png" alt="cd in box" />
        <StyledForm>
          <input type="text" placeholder="search..." />
        </StyledForm>
        <StyledH2>recently added</StyledH2>
        <CdContainer>
          <Cd />
          <Cd />
          <Cd />
          <Cd />
        </CdContainer>
      </StyledMain>
    );
  }
}
