import React from 'react';
import { Empty, Button } from 'antd';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div>
      <Empty
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        description="Sorry, we couldn't find that page"
      >
        <Link to='/'>
          <Button type='primary'>Take me to home page!</Button>
        </Link>
      </Empty>
      ,
    </div>
  );
};

export default NotFound;
