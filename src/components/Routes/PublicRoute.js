import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PublicLayout from 'components/Layouts/PublicLayout';
import { connect } from 'react-redux';

const PublicRoute = ({
  component: Component,
  restricted,
  accessToken,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        accessToken && restricted ? (
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
  return { accessToken: state.auth.accessToken };
};
export default connect(mapStateToProps)(PublicRoute);
