import React from 'react';
import {
    Switch,
} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import NotFound from '../pages/NotFound';
import HomePage from '../pages/HomePage';
import FormPage from '../pages/FormPage';
import AboutPage from '../pages/AboutPage';

const AppRoute = () => {

    return (
        <Switch>
            <ProtectedRoute exact path='/' component={HomePage} isAuth={true} />
            <ProtectedRoute path='/new-datasource' component={FormPage} isAuth={true} />
            <ProtectedRoute path='/About' component={AboutPage} isAuth={true} />
            <ProtectedRoute component={NotFound} isAuth={true} />
        </Switch>
    );
}

export default AppRoute;
