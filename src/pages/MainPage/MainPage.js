import React from 'react';
import { Typography, Card, Icon, Avatar, Pagination } from 'antd';
const { Meta } = Card;
const { Title } = Typography;
const MainPage = () => {
  return (
    <div>
      <Title>Main Page</Title>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt='example'
            src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          />
        }
        actions={[
          <Icon type='setting' key='setting' />,
          <Icon type='edit' key='edit' />,
          <Icon type='ellipsis' key='ellipsis' />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
          }
          title='Card title'
          description='This is the description'
        />
      </Card>
      <Pagination total={50} />
    </div>
  );
};

export default MainPage;
