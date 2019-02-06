import React from "react";
import styled from "styled-components";
import { robo, mont } from "../utils/fonts";
import { theme } from "../utils/theme";

const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgWrapper = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid #909090;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 0.5rem;
  box-shadow: ${theme.bs};
`;

const ArtistName = styled.h3`
  font-family: ${robo};
  font-weight: 700;
  font-size: 1.1rem;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const Title = styled.h4`
  font-family: ${mont};
  font-weight: 500;
  font-size: 0.9rem;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const Year = styled.h5`
  margin: 0;
  font-family: ${mont};
  font-weight: 700;
  font-size: 0.8rem;
`;
const Cd = () => (
  <StyledFigure>
    <ImgWrapper>
      <img src="" alt="" />
    </ImgWrapper>
    <figcaption>
      <ArtistName>Black Sabbath </ArtistName>
      <Title>Paranoid</Title>
      <Year>1969</Year>
    </figcaption>
  </StyledFigure>
);

export default Cd;
