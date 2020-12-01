import React, { useState, useEffect } from 'react';

import axios from 'axios';
import PropTypes from 'prop-types';
import Tracks from './Tracks/Tracks';

const Playlist = props => {
  const [playlists, setPlaylists] = useState();
  useEffect(() => {
    axios
      .get('https://api.spotify.com/v1/me/playlists', {
        headers: { Authorization: `Bearer ${props.token}` },
      })
      .then(res => {
        setPlaylists(res.data.items);
      });
  }, []);

  return (
    <div>
      {playlists &&
        playlists.map((playlist, index) => {
          console.log(playlists);
          return (
            <div key={index}>
              <p>{playlist.name}</p>
              <img src={playlist.images[0].url} />
              <Tracks token={props.token} playlistId={playlist.id} />
            </div>
          );
        })}
    </div>
  );
};

export default Playlist;

Playlist.propTypes = {
  token: PropTypes.string,
};
