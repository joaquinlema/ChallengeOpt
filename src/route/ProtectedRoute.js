import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const ProtectedRoute = ({isAuth, component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props: { location: any; }) => {
            if(isAuth){
                return <Component />
            }
            else{
                return (
                    <Redirect to={{ pathname:'/Login', state:{from: props.location}}} />
                );
            }
        }}
        />
    );
}

export default ProtectedRoute;