import React from 'react';
import { Layout, Menu, Icon, Avatar, Dropdown, PageHeader, Tag, Divider } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUserProfile } from 'actions/userActions';
import { logout } from 'actions/authActions';
import { history } from 'helpers/history';
import applaudo from 'assets/img/applaudo.svg';
import applaudoA from 'assets/img/applaudo-A.svg';
import './layouts.scss';
const { Content, Footer, Sider } = Layout;

class BaseLayout extends React.Component {
  componentDidMount() {
    this.props.fetchUserProfile();
  }
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  renderDropDown = () => (
    <Menu>
      <Menu.Item onClick={() => this.props.logout()}>Profile </Menu.Item>
      <Divider style={{ margin: '0' }} />
      <Menu.Item onClick={() => this.props.logout()}>Logout </Menu.Item>
    </Menu>
  );
  render() {
    const { images, display_name } = this.props.user;
    return (
      <Layout className='base' style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Link to='/main'>
            <div className='logo'>
              <img src={this.state.collapsed ? applaudoA : applaudo} alt='' />
            </div>
          </Link>
          <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
            <Menu.Item key='1'>
              <Link to='/main'>
                <Icon type='home' />
                <span>My Albums </span>
              </Link>
            </Menu.Item>

            <Menu.Item key='2'>
              <Icon type='search' />
              <span>Search</span>
            </Menu.Item>
            <Menu.Item key='3'>
              <Link to='/profile'>
                <Icon type='smile' />
                <span>My Profile </span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <PageHeader
            onBack={() => history.goBack()}
            style={{ background: '#fff', padding: '12px 24px' }}
            extra={[
              <Dropdown
                placement='bottomRight'
                key='1'
                overlay={this.renderDropDown}
                trigger={['click']}
              >
                <Tag className='name-tag' key='2'>
                  <Avatar
                    size='small'
                    icon='user'
                    className='avatar'
                    src={images ? images[0].url : ''}
                  />
                  {display_name}
                </Tag>
              </Dropdown>,
            ]}
          />

          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                background: '#fff',
                minHeight: 360,
              }}
            >
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            {"Applaudo Studios ©2013 Created by 2019's Trainee Program React Team"}
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user.user,
  };
};
export default connect(mapStateToProps, { fetchUserProfile, logout })(BaseLayout);
