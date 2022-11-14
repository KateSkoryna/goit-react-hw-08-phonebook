import { Link, HavigationBox } from './AuthNavigation.styled';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const AuthNavigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <HavigationBox>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/contacts">Phonebook</Link>
      </HavigationBox>
      <HavigationBox>
        <Link to="/register">Register</Link>
        <Link to="/login">{isLoggedIn ? 'Log Out' : 'Log In'}</Link>
      </HavigationBox>
    </>
  );
};

export default AuthNavigation;
