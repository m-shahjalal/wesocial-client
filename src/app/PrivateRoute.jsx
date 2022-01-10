
import { Container, Spinner } from '@chakra-ui/react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
const Private = ({ children }) => {
  let { isLoggedIn, loading } = useAuth();
  let location = useLocation();
  if (loading) {
    return (
      <Container>
        <Spinner size='lg' mx={2} />
      </Container>
    );
  } else if (!isLoggedIn && loading === false) {
    return <Navigate replace to='/login' state={{ from: location }} />;
  } else {
    return children;
  }
};

export default Private;
