import React, { useState, useEffect } from 'react';

import axios from 'axios';
import PropTypes from 'prop-types';

const Tracks = props => {
  const [tracks, setTracks] = useState();
  useEffect(() => {
    axios
      .get(
        'https://api.spotify.com/v1/playlists/45NhVz2qoz8Uxb3P8fMMoH/tracks',
        {
          headers: { Authorization: `Bearer ${props.token}` },
        }
      )
      .then(res => {
        setTracks(res.data.items);
      });
    console.log(tracks);
  }, []);
  return (
    <div>
      {tracks &&
        tracks.map((track, index) => {
          return (
            <div key={index}>
              <p>{track[index].track.album.name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Tracks;

Tracks.propTypes = {
  token: PropTypes.string,
};
