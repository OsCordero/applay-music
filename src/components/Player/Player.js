import React, { useEffect, useState } from 'react';
import { Icon, Spin } from 'antd';
import { connect } from 'react-redux';
import './player.scss';
const Player = props => {
  let playerCheckInterval = null;
  let player = null;
  const [deviceId, setDeviceId] = useState('');
  const [trackName, setTrackName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [playing, setPlaying] = useState(false);
  const [playerInstance, setPlayerInstance] = useState({});

  useEffect(() => {
    playerCheckInterval = setInterval(() => checkForPlayer(), 1000);
  }, []);

  const checkForPlayer = () => {
    if (window.Spotify !== null) {
      clearInterval(playerCheckInterval);
      player = new window.Spotify.Player({
        name: "Applay's Spotify Player",
        getOAuthToken: callback => {
          callback(props.token);
        },
      });
      setPlayerInstance(player);
      createEventHandlers();
      player.connect();
    }
  };

  const createEventHandlers = () => {
    // Playback status updates
    player.on('player_state_changed', state => onStateChanged(state));

    // Ready
    player.on('ready', data => {
      let { device_id } = data;
      setDeviceId(device_id);
    });
  };

  const onStateChanged = state => {
    if (state !== null) {
      const { current_track: currentTrack } = state.track_window;
      setTrackName(currentTrack.name);
      setArtistName(currentTrack.artists.map(artist => artist.name).join(', '));
      setPlaying(!state.paused);
    }
  };

  const onPauseOrPlay = () => {
    playerInstance.togglePlay();
  };

  const onPrevClick = () => {
    playerInstance.previousTrack();
  };

  const onNextClick = () => {
    playerInstance.nextTrack();
  };

  return deviceId ? (
    <div className='player'>
      <div className='player-btns-pad'>
        <Icon
          className='player-btns'
          type='step-backward'
          theme='filled'
          onClick={() => onPrevClick()}
        />
        <Icon
          className='player-btns'
          type={playing ? 'pause-circle' : 'play-circle'}
          theme='filled'
          onClick={() => onPauseOrPlay()}
        />
        <Icon
          className='player-btns'
          type='step-forward'
          theme='filled'
          onClick={() => onNextClick()}
        />
      </div>
      {playing ? (
        <div className='player-current-info'>
          <div className='track'>{trackName}</div>
          <div className='artist-name'>{artistName}</div>
        </div>
      ) : (
        ''
      )}
    </div>
  ) : (
    <Spin style={{ marginLeft: '35px', marginTop: '25px' }} />
  );
};
const mapStateToProps = state => {
  return { token: state.auth.accessToken };
};
export default connect(mapStateToProps)(Player);
