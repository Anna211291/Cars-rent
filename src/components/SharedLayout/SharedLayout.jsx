import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { NavStyle, NavWrapper } from './SharedLayout.styled';

const Link = styled(NavLink)`
  font-size: 30px;
  color: #3470ff;
  text-decoration: none;
  &.active {
    color: #0b44cd;
    font-weight: 700;
    text-decoration: underline;
  }
`;

export const SharedLayout = () => {
  return (
    <div>
      <NavWrapper>
        <NavStyle>
          <Link to="/" end>
            {' '}
            Home{' '}
          </Link>

          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorites</Link>
        </NavStyle>
      </NavWrapper>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
