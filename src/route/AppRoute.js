import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import NotFound from '../pages/NotFound';
import NavDrawer from '../components/home/NavDrawer';

const AppRoute = () => {

    return (
        <Switch>
            {/* <Route exact={true} path={["/", "/Login"]} component={Login} />*/}
            <ProtectedRoute path='/' component={NavDrawer} isAuth={true} />
            <ProtectedRoute component={NotFound} isAuth={true} />
        </Switch>
    );
}

export default AppRoute;
