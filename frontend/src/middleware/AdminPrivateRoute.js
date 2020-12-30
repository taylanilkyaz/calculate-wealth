import React from 'react';
import { Route } from 'react-router-dom';
import { NoAccessPath } from "../common-components/ui/no-access-path"

export const AdminPrivateRoute = ({ component: Component, userData, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            userData.user && (userData.user.role === "ADMIN") ?
                <Component {...props} />
                : <NoAccessPath></NoAccessPath>
        )} />
    );
};