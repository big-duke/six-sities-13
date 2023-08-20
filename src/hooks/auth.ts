import { useAppSelector } from '.';
import { AuthStatus } from '../const';
import { selectors } from '../store';

export const useAuth = () => {
  const authStatus = useAppSelector(selectors.getAuthStatus);
  return {isAuth:authStatus === AuthStatus.Auth};
};
