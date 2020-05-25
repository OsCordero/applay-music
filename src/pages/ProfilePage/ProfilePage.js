import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Row, Col, Typography, Descriptions, Button, Icon } from 'antd';
const { Title } = Typography;
const ProfilePage = (props) => {
  const { images, display_name, email, followers, country, external_urls } = props.user;
  return (
    <div>
      <Title level={2}>Profile:</Title>
      <Row type='flex' justify='center'>
        <Col span={16} style={{ textAlign: 'center' }}>
          <Avatar
            style={{ textAlign: 'center', boxShadow: '0px 0px 5 px 0px rgba(0,0,0,0.5)' }}
            size={250}
            src={images ? (images[0] ? images[0].url : '') : ''}
            icon='user'
          />

          <Descriptions title={<Title>{display_name}</Title>} bordered>
            <Descriptions.Item label='Profile'>
              {' '}
              <Button style={{ color: '#1db954', border: '2px solid #1db954' }}>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={external_urls ? external_urls.spotify : ''}
                >
                  <Icon type='arrow-up' rotate={45} />
                  See profile on spotify
                </a>
              </Button>
            </Descriptions.Item>
            <Descriptions.Item label='Live'>{country}</Descriptions.Item>
            {followers ? (
              <Descriptions.Item label='Followers'>{followers.total}</Descriptions.Item>
            ) : null}
            <Descriptions.Item label='Email'>{email}</Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};
export default connect(mapStateToProps)(ProfilePage);
