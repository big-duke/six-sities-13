import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAuth } from '../../hooks/auth';

type ProtectedRouteProps = {
  children: JSX.Element;
}
function ProtectedRoute({ children }: ProtectedRouteProps): JSX.Element {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to={AppRoute.Login} />;

}

export default ProtectedRoute;
