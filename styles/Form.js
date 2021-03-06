import styled from 'styled-components';
import { lighterblack } from '../utils/colors';
import { mont, robo } from '../utils/fonts';
import Button from './Button';

const FormWrapper = styled.section`
  margin: 40px auto;
  position: relative;
  height: 430px;
  margin-top: 100px;
  @media (max-width: 900px) {
    width: 300px;
    left: 0;
  }
`;

const Form = styled.form`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 50%;
  display: flex;
  transform: translateX(-75%);
  flex-direction: column;
  align-items: center;
  width: 430px;
  height: 430px;
  border: 1px solid ${lighterblack};
  border-radius: 5px;
  background-color: white;
  @media (max-width: 900px) {
    background: none;
    transform: translateX(0);
    margin-left: 0;
    left: 0;
    width: 100%;
    border: none;
  }
`;

const FormHeader = styled.h1`
  font-family: ${robo};
  font-size: 1.1rem;
  text-transform: uppercase;
  position: relative;
  margin: 0;
  margin-top: 2rem;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 1.7rem;
    width: 100%;
    height: 1px;
    background-color: #e1e1e1;
  }
  @media (max-width: 900px) {
    font-size: 1.3rem;
  }
`;

const Label = styled.label`
  :first-of-type {
    margin-top: 1.5rem;
  }
  margin-top: 1.3rem;
  display: block;
  font-size: 0.75rem;
`;

const Input = styled.input`
  margin-top: 0.2rem;
  display: block;
  width: 13rem;
  font-family: ${mont};
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
  border: 1px solid ${lighterblack};
  outline: none;
  border-radius: 2px;
`;

const FormButton = styled(Button)`
  position: absolute;
  bottom: 1.8rem;
  left: 50%;
  font-size: 0.9rem;
  transform: translateX(-50%);
  @media (max-width: 900px) {
    margin-top: 3rem;
    position: unset;
    transform: unset;
  }
`;

const MobileLinks = styled.p`
  display: none;
  @media (max-width: 900px) {
    margin-top: 1.5rem;
    display: block;
    a {
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

export { FormWrapper, FormButton, Form, FormHeader, Label, Input, MobileLinks };
