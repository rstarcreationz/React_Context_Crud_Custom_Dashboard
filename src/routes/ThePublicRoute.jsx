import { Navigate } from "react-router-dom";
import { useContextCrud } from "../context/ContactsCrudContext";

function ThePublicRoute({ children }) {
  const { userInfo } = useContextCrud();

  return !userInfo ? children : <Navigate to="/dashboard" />;
}

export default ThePublicRoute;
