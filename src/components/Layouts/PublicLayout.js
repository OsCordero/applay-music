import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import applaudo from 'assets/img/applaudoWelcome.svg';
import './layouts.scss';

const { Header, Content, Footer } = Layout;

const PublicLayout = props => {
  return (
    <Layout className='public'>
      <Header>
        <div className='logo'>
          <img src={applaudo} alt='' />
        </div>
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key='1'>
            <Link to='/'>Sign In</Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='/about'>What is Applay?</Link>
          </Menu.Item>
          <Menu.Item key='3'>Contact us</Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          padding: '0 50px',
          margin: '24px 16px 0',
          position: 'relative',
        }}
      >
        <div style={{ background: '#fff', padding: 24, minHeight: '70vh' }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        {"Applaudo Studios ©2013 Created by 2019's Trainee Program React Team"}
      </Footer>
    </Layout>
  );
};

export default PublicLayout;
