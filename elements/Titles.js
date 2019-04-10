import styled from "styled-components";
import { robo } from "../utils/fonts";
import { lightblack } from "../utils/colors";

export const PageTitle = styled.h1`
  text-align: center;
  font-family: ${robo};
  font-weight: 900;
  font-size: 3rem;
  letter-spacing: -1px;
  color: ${lightblack};
  margin: 0;
  margin-bottom: 2rem;
`;
