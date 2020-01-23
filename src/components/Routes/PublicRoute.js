import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PublicLayout from 'components/Layouts/PublicLayout';
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('authToken') && restricted ? (
          <Redirect to='/main' />
        ) : (
          <PublicLayout>
            <Component {...props} />
          </PublicLayout>
        )
      }
    />
  );
};

export default PublicRoute;
