import React, { useEffect } from 'react';
import { Tabs, Icon, Avatar, Row, Col, Typography, List, Button } from 'antd';
import { connect } from 'react-redux';

import { fetchArtistData } from 'actions/artistActions';
import SongList from 'components/SongList/SongList';
import RenderCtrl from 'components/RenderCtrl/RenderCtrl';
const { TabPane } = Tabs;
const { Title, Text } = Typography;
const ArtistDetailPage = props => {
  const { images, genres, name, followers, external_urls } = props.artist;
  const { match, fetchArtistData } = props;
  useEffect(() => {
    fetchArtistData(match.params.id);
  }, [match, fetchArtistData]);

  const renderTab = (type, title) => (
    <span>
      <Icon type={type} />
      {title}
    </span>
  );

  return (
    <div>
      <RenderCtrl error={props.error} loading={props.loading}>
        <Tabs
          tabBarExtraContent={
            <Button style={{ color: '#1db954', border: '2px solid #1db954' }}>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={external_urls ? external_urls.spotify : ''}
              >
                <Icon type='arrow-up' rotate={45} />
                See artist on spotify
              </a>
            </Button>
          }
        >
          <TabPane tab={renderTab('profile', 'Artist detail')} key='1'>
            <Row style={{ marginTop: '10px' }} type='flex' justify='center'>
              <Col xs={13} md={12} lg={8} style={{ textAlign: 'center' }}>
                <Avatar size={250} src={images ? images[0].url : ''} icon='user' />
                <Title>{name}</Title>
                <Text style={{ fontSize: '18px' }} code>
                  {followers ? followers.total : 0} followers
                </Text>
              </Col>
              <Col xs={22} md={12} lg={12}>
                <Title level={4}>Genres:</Title>
                <List
                  size='small'
                  bordered
                  dataSource={genres}
                  renderItem={item => <List.Item>{item}</List.Item>}
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tab={renderTab('star', 'Top tracks')} key='2'>
            <Row type='flex' justify='center'>
              <Col xs={24} lg={18}>
                <SongList tracks={props.tracks} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tab={renderTab('retweet', 'Related Artists')} key='3'>
            <Row type='flex' justify='center'>
              <Col span={18}>
                <List
                  loading={props.loading}
                  size='small'
                  pagination={{
                    pageSize: 4,
                  }}
                  dataSource={props.relatedArtists}
                  renderItem={item => (
                    <List.Item key={item.title}>
                      <List.Item.Meta
                        avatar={<Avatar size={64} src={item.images[0].url} />}
                        title={
                          <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href={item.external_urls.spotify}
                          >
                            {item.name}
                          </a>
                        }
                        description={`${item.followers.total} Followers`}
                      />
                      {`Genres: ${item.genres.join(', ')}`}
                    </List.Item>
                  )}
                />
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </RenderCtrl>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    artist: state.artist.artist,
    tracks: state.artist.topTracks,
    relatedArtists: state.artist.relatedArtists,
    error: state.artist.artistError,
    loading: state.artist.isLoading,
  };
};
export default connect(mapStateToProps, { fetchArtistData })(ArtistDetailPage);
