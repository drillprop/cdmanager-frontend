import styled from 'styled-components';
import { mont } from '../utils/fonts';
import { lightblack } from '../utils/colors';

export const PageTitle = styled.h1`
  text-align: center;
  font-family: ${mont};
  font-weight: 900;
  font-size: 2.5rem;
  letter-spacing: -1px;
  color: ${lightblack};
  margin: 0;
  margin-bottom: 2rem;
  @media (max-width: 510px) {
    font-size: 2.4rem;
  }
`;
