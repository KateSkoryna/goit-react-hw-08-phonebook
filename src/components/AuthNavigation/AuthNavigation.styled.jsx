import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: block;
  width: 80px;
  color: black;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 900;
  padding: 10px;
  text-align: center;
  &.active {
    color: white;
    background-color: rgb(158, 63, 176);
  }
`;

export const HavigationBox = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
