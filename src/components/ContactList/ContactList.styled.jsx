import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const ContactSection = styled.section`
  padding-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const ContactListBox = styled.ul`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const ContactListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 100%;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 60px) / 4);
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 100px) / 6);
  }
`;

export const ContactListText = styled.p`
  margin-bottom: 10px;
`;

export const ContactListBtn = styled(Button)`
  width: 160px;
  height: 40px;
  font-size: 12px;
  transition: scale 250ms linear, background-color 250ms linear,
    color 250ms linear;
`;
