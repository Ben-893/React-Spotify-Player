import React, { useState, useEffect } from 'react';

import axios from 'axios';
import PropTypes from 'prop-types';
import './Tracks.css';

const Tracks = props => {
  const [tracks, setTracks] = useState();
  useEffect(() => {
    axios
      .get(`https://api.spotify.com/v1/playlists/${props.playlistId}/tracks`, {
        headers: { Authorization: `Bearer ${props.token}` },
      })
      .then(res => {
        setTracks(res.data.items);
      });
  }, []);
  console.log(tracks);
  return (
    <div>
      {tracks &&
        tracks.map((track, index) => {
          return (
            <div className='tracks' key={index}>
              <img
                className='trackImages'
                src={track.track.album.images[0].url}
              />
              <span>
                {track.track.name} - {track.track.album.name}
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default Tracks;

Tracks.propTypes = {
  token: PropTypes.string,
  playlistId: PropTypes.string,
};
