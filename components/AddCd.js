import React, { Component } from "react";
import styled from "styled-components";
import { robo, mont } from "../utils/fonts";
import { black, lightblack, lighterblack } from "../utils/colors";
import { theme } from "../utils/theme";
import RecentCds from "./RecentCds";

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
  font-weight: 900;
  font-size: 3rem;
  letter-spacing: -1px;
  color: ${lightblack};
  margin-bottom: 2rem;
  margin-top: 3rem;
`;
const StyledForm = styled.form`
  margin: 0 auto;
  width: 700px;
  input {
    margin: 0 auto;
    display: block;
    width: 500px;
    height: 45px;
    outline: none;
    background: white;
    border: 1px solid #909090;
    padding: 0 28px;
    border-radius: 3px;
    font-family: ${mont};
    font-size: 1rem;
    box-shadow: ${theme.bs};
    transform: ${({ displayRecent }) =>
      displayRecent ? "scale(1)" : "scale(1.5)"};
    transition: all 300ms;
  }
`;

export default class AddCd extends Component {
  state = {
    displayRecent: true,
    result: ""
  };
  handleChange = e => {
    const { value: result } = e.currentTarget;
    result
      ? this.setState({ displayRecent: false, result })
      : this.setState({ displayRecent: true });
  };
  render() {
    const { displayRecent } = this.state;
    return (
      <StyledMain>
        <StyledH1>add an album</StyledH1>
        <StyledForm displayRecent={displayRecent}>
          <input
            type="text"
            placeholder="search..."
            onChange={this.handleChange}
          />
        </StyledForm>
        <RecentCds show={displayRecent} />
      </StyledMain>
    );
  }
}
