import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Row, Col, Typography } from 'antd';
const { Title } = Typography;
const ProfilePage = props => {
  const { images, display_name } = props.user;
  return (
    <div>
      <h1>profile</h1>
      <Row type='flex' justify='center'>
        <Col span={12} style={{ textAlign: 'center' }}>
          <Avatar
            style={{ textAlign: 'center', boxShadow: '0px 0px 5 px 0px rgba(0,0,0,0.5)' }}
            size={250}
            src={images ? images[0].url : ''}
            icon='user'
          />
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user.user,
  };
};
export default connect(mapStateToProps)(ProfilePage);
