import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import BaseLayout from 'components/Layouts/BaseLayout';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  // eslint-disable-next-line no-debugger

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
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
  return { isLoggedIn: state.auth.isLoggedIn };
};
export default connect(mapStateToProps)(PrivateRoute);
