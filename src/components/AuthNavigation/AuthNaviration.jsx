import { Link } from './AuthNavigation.styled';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const AuthNavigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Link to="/" end>
        Home
      </Link>
      <Link to="/register">Register</Link>
      <Link to="/login">{isLoggedIn ? 'Log Out' : 'Log In'}</Link>
    </>
  );
};

export default AuthNavigation;
