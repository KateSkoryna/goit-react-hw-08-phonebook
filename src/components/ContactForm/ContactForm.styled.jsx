import styled from '@emotion/styled';
import { Form } from 'formik';
import { Button } from '@mui/material';

export const FormSection = styled.section`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const FormBox = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;
`;

export const FormLabel = styled.label`
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 30px;

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
