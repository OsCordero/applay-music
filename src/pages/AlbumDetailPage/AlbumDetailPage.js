import React, { useEffect } from 'react';
import { Row, Col, List, Typography, Icon, Alert, Spin } from 'antd';
import { connect } from 'react-redux';

import { fetchAlbumDetail } from 'actions/albumActions';
import './detail.scss';

const { Title, Text } = Typography;
const AlbumDetailPage = props => {
  const { images, tracks } = props.album;
  const { album } = props;

  useEffect(() => {
    props.fetchAlbumDetail(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <div>
      <h1>Album detail page</h1>
      {props.error ? (
        <Alert
          message='Something went wrong'
          closable
          description={"We're sorry, please try refresh the page"}
          type='error'
          showIcon
        />
      ) : props.loading ? (
        <div className='spinner'>
          <Spin className='spinner' size='large' style={{}} />
        </div>
      ) : (
        <>
          <Row>
            <Col md={{ span: 8, offset: 7 }} lg={{ span: 8, offset: 0 }} xl={8}>
              <img src={images ? images[1].url : ''} alt='albun-image' />
              <div style={{ minWidth: '300px' }}>
                <a href={album.external_urls ? album.external_urls.spotify : ''}>
                  <Title level={2} style={{ marginBottom: 0 }}>
                    {album.name}
                  </Title>
                </a>

                <Title level={3} style={{ margin: 0 }}>
                  {album.artists ? album.artists.map(artist => artist.name).join(', ') : ''}
                </Title>
                <Title level={4} style={{ margin: 0 }}>
                  {album.genres
                    ? album.genres.lenght > 0
                      ? `Genres ${album.genres.map(genre => genre.name).join(', ')}`
                      : ''
                    : ''}
                </Title>
                <Text code>Release date: {album.release_date}</Text>
                <div style={{ marginTop: '10px' }}>
                  <a href={album.external_urls ? album.external_urls.spotify : ''}>
                    <Icon type='arrow-up' rotate={45} />
                    See album on spotify
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={{ span: 14, offset: 2 }} xl={{ span: 16, offset: 0 }}>
              <List
                pagination={{ pageSize: 5 }}
                header={<div>Tracks:</div>}
                bordered
                dataSource={tracks ? tracks.items : []}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={
                        <div>
                          {item.track_number}. {item.name}
                        </div>
                      }
                      description={[
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href={item.external_urls.spotify}
                          key='play'
                          style={{ color: '#1db954' }}
                        >
                          <Icon type='play-circle' theme='filled' />
                          Listen on spotify
                        </a>,
                      ]}
                    />
                    <div>
                      {(() => {
                        const minutes = Math.floor(item.duration_ms / 60000);
                        const seconds = ((item.duration_ms % 60000) / 1000).toFixed(0);
                        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
                      })()}
                    </div>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    album: state.album.selectedAlbum,
    error: state.album.albumError,
    loading: state.album.isLoading,
  };
};
export default connect(mapStateToProps, { fetchAlbumDetail })(AlbumDetailPage);
