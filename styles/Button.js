import styled from 'styled-components';
import { black, background } from '../utils/colors';

const Button = styled.button`
  display: block;
  ${(props) => props.center && 'margin: 0 auto'};
  border: ${(props) => (props.small ? `1px solid ${black}` : 'none')};
  font-weight: 700;
  font-size: ${(props) => (props.small ? `0.8rem` : '1rem')};
  padding: 1em 2em;
  border-radius: 5px;
  text-transform: ${(props) => (props.small ? 'unset' : 'uppercase')};
  background: ${(props) => (props.small ? background : black)};
  color: ${(props) => (props.small ? black : background)};
`;

export default Button;
