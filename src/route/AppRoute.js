import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';

const AppRoute = () => {

    const history = useHistory();

    useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Switch>
            {/* <Route exact={true} path={["/", "/Login"]} component={Login} />
            <ProtectedRoute path='/App/Common/' component={AppContainerPage} isAuth={isAuth} />
            <ProtectedRoute path='/App/Transaccion/' component={TransaccionesContainerPage} isAuth={isAuth} />
            <ProtectedRoute path='/App/' component={NotFound} isAuth={isAuth} />
            <ProtectedRoute component={NotFound} isAuth={isAuth} /> */}
        </Switch>
    );
}

export default AppRoute;
