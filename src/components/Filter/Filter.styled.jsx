import styled from '@emotion/styled';

export const FilterTitle = styled.label`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  text-transform: uppercase;
  flex-grow: 1;
  width: 100%;
`;

export const FilterInput = styled.input`
  width: 100%;
  height: 30px;

  margin-top: 10px;

  @media screen and (min-width: 480px) {
    width: 450px;
  }
`;
