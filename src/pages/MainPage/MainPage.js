import React, { useEffect, useState } from 'react';
import { Typography, Card, Icon, Pagination, Row, Col, Alert, Spin } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUserAlbums } from 'actions/albumActions';
import './main.scss';
const { Meta } = Card;
const { Title } = Typography;

const MainPage = props => {
  const { fetchUserAlbums } = props;

  useEffect(() => {
    fetchUserAlbums(0);
  }, [fetchUserAlbums]);

  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = page => {
    setCurrentPage(page);
    fetchUserAlbums((page - 1) * 4);
  };
  return (
    <div>
      <Title>Your saved Albums:</Title>
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
          <Row type='flex' gutter={[30, 16]}>
            {props.albums.map(albumsItem => {
              const { album } = albumsItem;
              return (
                <Col xs={24} md={12} lg={8} xl={6} key={album.id}>
                  <Card
                    hoverable={true}
                    cover={<img alt='album-cover' src={album.images[1].url} />}
                    actions={[
                      <Link to={`/album-detail/${album.id}`} key='edit'>
                        <div>
                          <Icon type='file-search' />
                          See Details
                        </div>
                      </Link>,
                      <a
                        key='ellipsis'
                        target='_blank'
                        rel='noopener noreferrer'
                        href={album.external_urls.spotify}
                      >
                        <Icon type='ellipsis' />
                        Go to spotify
                      </a>,
                    ]}
                  >
                    <Link to={`/album-detail/${album.id}`} key='edit'>
                      <Meta title={album.name} description={album.artists[0].name} />
                    </Link>
                  </Card>
                </Col>
              );
            })}
          </Row>

          <div className='pagination-container'>
            <Pagination
              pageSize={4}
              style={{ margin: '0 auto' }}
              total={props.total}
              onChange={onPageChange}
              current={currentPage}
            />
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    albums: state.album.albumList,
    total: state.album.totalAlbums,
    error: state.album.albumError,
    loading: state.album.isLoading,
  };
};
export default connect(mapStateToProps, { fetchUserAlbums })(MainPage);
