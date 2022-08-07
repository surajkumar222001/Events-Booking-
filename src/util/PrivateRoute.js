import React from "react"
import { Navigate} from "react-router-dom";
import * as userUtil from "../util/userUtil"

let PrivateRoute = ({ children }) => {

    if (!userUtil.isLoggedIn()){
        return <Navigate to="/user/login"  />;
    }
    return children;
};

export default PrivateRoute;


/*
function RequireAuth({ children }: { children: JSX.Element }) {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}*/
