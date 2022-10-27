import { Navigate } from "react-router-dom";
import { useContextCrud } from "../context/ContactsCrudContext";

function ThePrivateRoute({ children }) {
  const { userInfo } = useContextCrud();
  return userInfo ? children : <Navigate to="/login" />;
}

export default ThePrivateRoute;
