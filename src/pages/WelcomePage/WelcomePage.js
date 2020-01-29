import React, { useEffect } from 'react';
import { Typography, Button } from 'antd';
import { connect } from 'react-redux';
import { login, logout } from 'actions/authActions';

import './welcome.scss';
import icon from './spotify.png';
const { Title } = Typography;

export const WelcomePage = props => {
  const scopes = 'user-library-read,streaming,app-remote-control,user-modify-playback-state';
  const { match, login, logout } = props;
  useEffect(() => {
    if (match.path.includes('callback')) {
      login(window.location.hash);
    } else {
      logout();
    }
  }, [match.path, login, logout]);

  return (
    <div className='welcome'>
      <Title>Sign In with your spotify account</Title>
      <Title level={2}>you are one click away!</Title>
      <a
        href={`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=${scopes}&response_type=token&redirect_uri=http://localhost:3000/callback`}
        style={{ color: 'white' }}
      >
        <Button className='spotify'>
          Sign In {'  '}
          <img className='spotify-icon' src={icon} alt='' />
        </Button>
      </a>
    </div>
  );
};

export default connect(null, { login, logout })(WelcomePage);
