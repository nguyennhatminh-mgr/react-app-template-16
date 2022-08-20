import { Navigate, Outlet } from 'react-router-dom';

import { useAuthToken } from 'hooks/useAuthToken';
import { RouterConstants } from 'routes';

const PrivateRoute = () => {
  const { accessToken } = useAuthToken();

  if (accessToken) {
    return <Outlet />;
  }

  return <Navigate to={RouterConstants.login} />;
};

export default PrivateRoute;
