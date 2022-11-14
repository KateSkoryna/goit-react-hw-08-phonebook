import styled from '@emotion/styled';
import { Form } from 'formik';
import { Button } from '@mui/material';

export const FormSection = styled.section`
  margin-left: auto;
  margin-right: auto;
`;

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
  margin-top: 10px;
  width: 100%;

  @media screen and (min-width: 480px) {
    width: 450px;
  }
`;

export const FormInput = styled.input`
  height: 30px;
  width: 100%;

  @media screen and (min-width: 480px) {
    width: 450px;
  }

  ${
    '' /* &:not(:last-child) {
    margin-right: 20px;
  } */
  }
`;

export const FormButton = styled(Button)`
  ${'' /* display: block; */}
  margin-top: 20px;
  width: 160px;
  height: 40px;
  font-size: 12px;
  transition: scale 250ms linear, background-color 250ms linear,
    color 250ms linear;

  ${
    '' /* :hover,
  :focus {
    background-color: #63868a;
    color: #e1e4e9;
    scale: 1.1;
  } */
  }
`;
