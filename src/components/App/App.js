import React, { Suspense, lazy } from 'react';
import { Router, Switch } from 'react-router-dom';

import { history } from 'helpers/history';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';
import WelcomePage from 'pages/WelcomePage/WelcomePage';

import './app.scss';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const AlbumDetailPage = lazy(() => import('pages/AlbumDetailPage/AlbumDetailPage'));
const ArtistDetailPage = lazy(() => import('pages/ArtistDetailPage/ArtistDetailPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage/ProfilePage'));
const About = lazy(() => import('pages/About/About'));

const App = () => {
  return (
    <div className='app'>
      <Router history={history}>
        <div>
          <div className='container'>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <PublicRoute restricted={true} path='/' exact component={WelcomePage} />
                <PublicRoute restricted={true} path='/callback' component={WelcomePage} />
                <PrivateRoute exact path='/main' component={MainPage} />
                <PrivateRoute exact path='/album-detail/:id' component={AlbumDetailPage} />
                <PrivateRoute exact path='/artist-detail/:id' component={ArtistDetailPage} />
                <PrivateRoute exact path='/profile' component={ProfilePage} />
                <PublicRoute restricted={true} path='/about' exact component={About} />
                {/* <Route component={NotFound} /> */}
              </Switch>
            </Suspense>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
