import React from 'react';
import { Typography, Button } from 'antd';
import './welcome.scss';
import icon from './spotify.png';
const { Title } = Typography;

const WelcomePage = () => {
  return (
    <div className='welcome'>
      <Title>Sign In with your spotify account</Title>
      <Title level={2}>you are one click away!</Title>
      <Button className='spotify'>
        Sign In {'  '}
        <img className='spotify-icon' src={icon} alt='' />
      </Button>
    </div>
  );
};

export default WelcomePage;
