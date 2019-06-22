import styled from 'styled-components';
import { black, background } from '../utils/colors';

const Button = styled.button`
  border: none;
  font-weight: 700;
  font-size: 1rem;
  padding: 1em 2em;
  border-radius: 5px;
  text-transform: uppercase;
  background: ${black || 'black'};
  color: ${background};
`;

export default Button;
