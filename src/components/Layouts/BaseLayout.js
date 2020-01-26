import React from 'react';
import { Layout, Menu, Icon, Avatar, Dropdown, PageHeader, Tag } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUserProfile } from 'actions/userActions';
import { logout } from 'actions/authActions';
import applaudo from 'assets/img/applaudo.svg';
import applaudoA from 'assets/img/applaudo-A.svg';
import './layouts.scss';
const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

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
      <Menu.Item onClick={() => this.props.logout()}>Logout </Menu.Item>
    </Menu>
  );
  render() {
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
              <Icon type='pie-chart' />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type='desktop' />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key='sub1'
              title={
                <span>
                  <Icon type='user' />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key='3'>Tom</Menu.Item>
              <Menu.Item key='4'>Bill</Menu.Item>
              <Menu.Item key='5'>Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key='sub2'
              title={
                <span>
                  <Icon type='team' />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key='6'>Team 1</Menu.Item>
              <Menu.Item key='8'>Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key='9'>
              <Icon type='file' />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <PageHeader
            style={{ background: '#fff', padding: '5px 24px' }}
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
                    src={this.props.profileImg}
                  />
                  {this.props.name}
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
    profileImg: state.user.user.images
      ? state.user.user.images[0]
        ? state.user.user.images[0].url
        : ''
      : '',
    name: state.user.user.display_name ? state.user.user.display_name : '',
  };
};
export default connect(mapStateToProps, { fetchUserProfile, logout })(BaseLayout);
