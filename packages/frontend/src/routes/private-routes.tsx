import { Navigate } from "react-router-dom";

export function PrivateRoute({ user, children }: any) {
  if (!user) return <Navigate to="/" replace />;

  return children;
}
