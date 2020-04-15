import styled from 'styled-components';
import { lighterblack } from '../utils/colors';
import { mont, robo } from '../utils/fonts';
import Button from './Button';

const FormWrapper = styled.section`
  margin: 0 auto;
  position: relative;
  margin-top: 80px;
  height: 600px;
  overflow: hidden;
  @media (max-width: 900px) {
    width: 300px;
    left: 0;
  }
`;

const Form = styled.form`
  position: absolute;
  top: 0;
  left: 50%;
  display: flex;
  transform: translateX(-75%);
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  width: 500px;
  height: 500px;
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
  @media (max-width: 900px) {
    font-size: 1.3rem;
  }
`;

const Label = styled.label`
  margin-bottom: 1.5rem;
  p {
    font-size: 0.9rem;
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

const StrongAnchor = styled.a`
  font-weight: bold;
  cursor: pointer;
`;

export {
  FormWrapper,
  ButtonGroup,
  FormButton,
  Form,
  FormHeader,
  Label,
  Input,
  StrongAnchor,
};
