import styled from '@emotion/styled';

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;