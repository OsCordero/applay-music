import React, { useEffect } from 'react';
import { Row, Col, Typography, Icon, Tooltip } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchAlbumDetail } from 'actions/albumActions';
import SongList from 'components/SongList/SongList';

import RenderCtrl from 'components/RenderCtrl/RenderCtrl';
import './album-detail.scss';
const { Title, Text } = Typography;
const AlbumDetailPage = props => {
  const { images, tracks } = props.album;
  const { album, match, fetchAlbumDetail } = props;

  useEffect(() => {
    fetchAlbumDetail(match.params.id);
  }, [match.params.id, fetchAlbumDetail]);

  return (
    <div>
      <Title level={2}>Album detail page</Title>
      <RenderCtrl error={props.error} loading={props.loading}>
        <Row>
          <Col xs={24} sm={24} md={{ span: 8, offset: 7 }} lg={{ span: 8, offset: 0 }} xl={8}>
            <img
              className='album-detail-image'
              src={images ? images[1].url : ''}
              alt='album-cover'
            />
            <div style={{ minWidth: '100%' }}>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={album.external_urls ? album.external_urls.spotify : ''}
              >
                <Title level={2} style={{ marginBottom: 0 }}>
                  {album.name}
                </Title>
              </a>

              <Title level={3} style={{ margin: 0 }}>
                {album.artists
                  ? album.artists.map(artist => (
                      <div key={artist.id}>
                        {artist.name}
                        <Link to={`/artist-detail/${artist.id}`}>
                          <Tooltip title="See this artist's details">
                            <Icon type='info-circle' style={{ marginLeft: '10px' }} />
                          </Tooltip>
                        </Link>
                      </div>
                    ))
                  : ''}
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
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={album.external_urls ? album.external_urls.spotify : ''}
                >
                  <Icon type='arrow-up' rotate={45} />
                  See album on spotify
                </a>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={{ span: 14, offset: 2 }} xl={{ span: 16, offset: 0 }}>
            <SongList tracks={tracks ? tracks.items : []} />
          </Col>
        </Row>
      </RenderCtrl>
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
