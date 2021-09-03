import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import NotFound from '../pages/NotFound';
import HomePage from '../pages/HomePage';
import FormPage from '../pages/FormPage';

const AppRoute = () => {

    return (
        <Switch>
            <ProtectedRoute exact path='/' component={HomePage} isAuth={true} />
            <ProtectedRoute path='/new-datasource' component={FormPage} isAuth={true} />
            <ProtectedRoute component={NotFound} isAuth={true} />
        </Switch>
    );
}

export default AppRoute;
