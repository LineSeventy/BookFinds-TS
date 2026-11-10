import { useAuth } from "./Auth-Context";
import { Navigate, Outlet, useLocation } from "react-router";

export function ProtectedRoute() {
  const { session, loading } = useAuth();
  const location = useLocation();

  if (loading) return <p>Loading</p>;

  if (!session) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return <Outlet />;
}
