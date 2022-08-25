import { useAuthState } from "../Context/login";
import { Navigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";

function AppRoutes() {
  const { user } = useAuthState();

  return <>{user ? <Dashboard /> : <Navigate to="/" />}</>;
}

export default AppRoutes;