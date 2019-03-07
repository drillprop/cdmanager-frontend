import styled from 'styled-components';
import { black, lightblack, lighterblack } from '../utils/colors';
import { robo, mont } from '../utils/fonts';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 480px;
  height: 480px;
  margin: 0 auto;
  border: 1px solid ${lighterblack};
  border-radius: 5px;
`;

const FormHeader = styled.h1`
  font-family: ${robo};
  text-transform: uppercase;
  position: relative;
  margin-bottom: 60px;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 65px;
    width: 100%;
    height: 1px;
    background-color: #e1e1e1;
  }
`;

const Label = styled.label`
  margin-bottom: 1.5rem;
  p {
    margin: 0;
    margin-bottom: 0.4rem;
  }
`;

const Input = styled.input`
  width: 15rem;
  font-family: ${mont};
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
  border: 1px solid ${lighterblack};
  outline: none;
  border-radius: 2px;
`;

export { Form, FormHeader, Label, Input };
