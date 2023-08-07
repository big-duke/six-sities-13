import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type ProtectedRouteProps = {
  authorizationStatus:AuthorizationStatus;
  children: JSX.Element;
}
function ProtectedRoute({authorizationStatus, children}:ProtectedRouteProps):JSX.Element {
  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />;

}

export default ProtectedRoute;
