import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import HomePage from '../pages/HomePage';
import FormPage from '../pages/FormPage';
import NotFound from '../pages/NotFound';

const AppRoute = () => {

    return (
        <Switch>
            {/* <Route exact={true} path={["/", "/Login"]} component={Login} />*/}
            <ProtectedRoute path='/' component={HomePage} isAuth={true} />
            <ProtectedRoute path='/new-datasource' component={FormPage} isAuth={true} />
            <ProtectedRoute component={NotFound} isAuth={true} />
        </Switch>
    );
}

export default AppRoute;
