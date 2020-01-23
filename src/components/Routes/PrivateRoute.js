import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import BaseLayout from 'components/Layouts/BaseLayout';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, accessToken, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        accessToken ? (
          <BaseLayout>
            <Component {...props} />
          </BaseLayout>
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );
};

const mapStateToProps = state => {
  return { accessToken: state.auth.accessToken };
};
export default connect(mapStateToProps)(PrivateRoute);
