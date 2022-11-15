import styled from '@emotion/styled';

export const FilterTitle = styled.label`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
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

  &:focus,
  &:hover,
  &:active {
    border-color: rgb(158, 63, 176);
  }
`;
