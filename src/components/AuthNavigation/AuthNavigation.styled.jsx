import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: block;
  width: 80px;
  color: black;
  text-transform: uppercase;
  font-weight: 900;
  padding: 10px;
  text-align: center;
  &.active {
    color: white;
    background-color: rgb(158, 63, 176);
  }
`;
