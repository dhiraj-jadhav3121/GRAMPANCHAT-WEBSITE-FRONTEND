import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const isAdminLogin = localStorage.getItem("isAdminLogin");

    if (isAdminLogin === "true") {
        return children;
    }

    return <Navigate to="/login" />;
}

export default ProtectedRoute;