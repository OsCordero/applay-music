import React from 'react';
import { List, Icon } from 'antd';
const SongList = props => {
  const { tracks } = props;
  return (
    <List
      pagination={{ pageSize: 5 }}
      header={<div>Tracks:</div>}
      bordered
      dataSource={tracks}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<div>{item.name}</div>}
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
  );
};

export default SongList;
