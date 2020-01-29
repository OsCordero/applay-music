import React, { useEffect, useState } from 'react';
import { Input, Row, Col, Card, Typography, Empty } from 'antd';
import { search } from 'actions/searchAction';
import useDebounce from 'helpers/customHooks/useDebounce';
import SongList from 'components/SongList/SongList';
import './search-page.scss';

const { Search } = Input;
const { Meta } = Card;
const { Title } = Typography;
const SearchPage = () => {
  const [fetchedData, setFetchedData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { artists, albums, tracks } = fetchedData;
  const onSearch = () => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      search(debouncedSearchTerm).then(results => {
        setIsSearching(false);
        setFetchedData(results);
      });
    } else {
      setFetchedData({});
    }
  };

  useEffect(() => {
    onSearch();
  }, [debouncedSearchTerm]);

  return (
    <div>
      <Search
        loading={isSearching}
        size='large'
        style={{ width: '300px', borderRadius: '100px' }}
        placeholder='Search artists, songs or albums'
        onSearch={async () => {
          onSearch();
        }}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {Object.keys(fetchedData).length > 0 && (
        <div>
          <Row className='results'>
            <Col>
              <SongList tracks={tracks.items} artist={true} pageSize={3} />
            </Col>
          </Row>
          <Title level={2}>Artists</Title>
          {artists.items.length > 0 ? (
            <Row className='results' type='flex' justify='center' gutter={[30, 16]}>
              {artists.items.map(artist => (
                <Col xs={12} md={8} xl={4} key={artist.id}>
                  <Card
                    hoverable
                    cover={
                      <img
                        style={{ padding: '10px' }}
                        alt='artist-cover'
                        src={artist.images.length > 0 ? artist.images[0].url : ''}
                      />
                    }
                  >
                    <Meta title={artist.name} />
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <Empty description='No results found' />
          )}
          <Title level={2}>Albums</Title>
          {albums.items.length > 0 ? (
            <Row className='results' type='flex' justify='center' gutter={[30, 16]}>
              {albums.items.map(album => (
                <Col xs={12} md={8} xl={4} key={album.id}>
                  <Card
                    hoverable
                    cover={
                      <img
                        style={{ padding: '10px' }}
                        alt='album-cover'
                        src={album.images.length > 0 ? album.images[0].url : ''}
                      />
                    }
                  >
                    <Meta title={album.name} />
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <Empty description='No results found' />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
