import React from 'react';
import { Route } from 'react-router-dom';
import { NoAccessPath } from "../common-components/ui/no-access-path"

export const CustomerPrivateRoute = ({ component: Component, userData, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            userData.user && (userData.user.role === "CUSTOMER") ?
                <Component {...props} />
                : <NoAccessPath></NoAccessPath>

            // <Redirect to="/" />
        )} />
    );
};