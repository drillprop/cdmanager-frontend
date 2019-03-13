import styled from 'styled-components';
import { black, lightblack, lighterblack } from '../utils/colors';
import { robo, mont } from '../utils/fonts';
import Button from './Button';

const FormWrapper = styled.section`
  margin: 0 auto;
  position: relative;
  margin-top: 3.5rem;
  height: 450px;
  overflow-y: hidden;
  @media (max-width: 900px) {
    width: 300px;
    left: 0;
  }
`;

const Form = styled.form`
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  width: 430px;
  height: 430px;
  border: 1px solid ${lighterblack};
  border-radius: 5px;
  background-color: white;
  @media (max-width: 900px) {
    width: 300px;
    left: 0;
    background: none;
    border: none;
  }
`;

const FormHeader = styled.h1`
  font-family: ${robo};
  font-size: 1.5rem;
  text-transform: uppercase;
  position: relative;
  margin-top: 2rem;
  margin-bottom: 2rem;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 2rem;
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
  width: 13rem;
  margin-bottom: 1.5rem;
  font-family: ${mont};
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
  border: 1px solid ${lighterblack};
  outline: none;
  border-radius: 2px;
`;
const ButtonGroup = styled.div`
  margin-bottom: 1rem;
`;

const FormButton = styled(Button)`
  position: relative;
  padding: 1rem 2rem;
  display: block;
  margin: 0 auto;
`;

export { FormWrapper, ButtonGroup, FormButton, Form, FormHeader, Label, Input };
