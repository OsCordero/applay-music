import React from 'react';
import { Router, Switch } from 'react-router-dom';

import { history } from 'helpers/history';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import MainPage from 'pages/MainPage/MainPage';
import AlbumDetailPage from 'pages/AlbumDetailPage/AlbumDetailPage';
import About from 'pages/About/About';

import './app.scss';
const App = () => {
  return (
    <div className='app'>
      <Router history={history}>
        <div>
          <div className='container'>
            <Switch>
              <PublicRoute
                restricted={true}
                path='/'
                exact
                component={WelcomePage}
              />
              <PublicRoute path='/callback' component={WelcomePage} />
              <PrivateRoute exact path='/main' component={MainPage} />
              <PrivateRoute
                exact
                path='/album-detail'
                component={AlbumDetailPage}
              />
              <PublicRoute
                restricted={true}
                path='/about'
                exact
                component={About}
              />
              {/* <Route component={NotFound} /> */}
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
