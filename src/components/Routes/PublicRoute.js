import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PublicLayout from 'components/Layouts/PublicLayout';
import { connect } from 'react-redux';

const PublicRoute = ({ component: Component, restricted, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn && restricted ? (
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
const mapStateToProps = state => {
  return { isLoggedIn: state.auth.isLoggedIn };
};
export default connect(mapStateToProps)(PublicRoute);
