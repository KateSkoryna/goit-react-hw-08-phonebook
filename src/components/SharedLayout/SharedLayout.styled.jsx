import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 1px solid black;
  margin-left: auto;
  margin-right: auto;
`;

export const Navigation = styled.nav`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  display: flex;
  justify-content: space-between;
`;

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
