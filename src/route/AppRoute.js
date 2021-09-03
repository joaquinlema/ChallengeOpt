import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import HomePage from '../pages/HomePage';
import FormPage from '../pages/FormPage';

const AppRoute = () => {

    return (
        <Switch>
            <ProtectedRoute path='/' component={HomePage} isAuth={true} />
            <ProtectedRoute path='/new-datasource' component={FormPage} isAuth={true} />
            {/* <Route exact={true} path={["/", "/Login"]} component={Login} />
            <ProtectedRoute path='/App/Common/' component={AppContainerPage} isAuth={isAuth} />
            <ProtectedRoute path='/App/Transaccion/' component={TransaccionesContainerPage} isAuth={isAuth} />
            <ProtectedRoute path='/App/' component={NotFound} isAuth={isAuth} />
            <ProtectedRoute component={NotFound} isAuth={isAuth} /> */}
        </Switch>
    );
}

export default AppRoute;
