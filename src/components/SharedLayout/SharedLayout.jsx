import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Global } from '@emotion/react';
import { GlobalStyles } from '../App/GlobalStyles.styled';
import { Container } from '../App/Container.styled';
import { Header, Navigation } from './SharedLayout.styled';
import Loader from 'components/Loader';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks';
import AuthNavigation from 'components/AuthNavigation';

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Global styles={GlobalStyles} />
      <Container>
        <Header>
          <Navigation>
            {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
          </Navigation>
        </Header>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
