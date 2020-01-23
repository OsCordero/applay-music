import React, { useEffect } from 'react';
import { Typography, Button } from 'antd';
import { connect } from 'react-redux';
import { login } from 'actions/authActions';
import { history } from 'helpers/history';
import './welcome.scss';
import icon from './spotify.png';
const { Title } = Typography;

const WelcomePage = props => {
  useEffect(() => {
    if (props.match.path.includes('callback')) {
      props.login(window.location.hash);
    }
  }, []);

  return (
    <div className='welcome'>
      <Title>Sign In with your spotify account</Title>
      <Title level={2}>you are one click away!</Title>
      <Button className='spotify'>
        <a
          href={`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:3000/callback&show_dialog=true`}
          style={{ color: 'white' }}
        >
          Sign In {'  '}
        </a>
        <img className='spotify-icon' src={icon} alt='' />
      </Button>
    </div>
  );
};

export default connect(null, { login })(WelcomePage);
