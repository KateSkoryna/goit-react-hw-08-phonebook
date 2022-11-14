import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const ContactSection = styled.section`
  margin-top: 30px;
`;

export const ContactListBox = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ContactListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc((100% - 60px) / 4);
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
