import React, { useEffect } from 'react';

import axios from 'axios';
import PropTypes from 'prop-types';

const Playlist = props => {
  useEffect(() => {
    axios
      .get('https://api.spotify.com/v1/me/playlists', {
        headers: { Authorization: `Bearer ${props.token}` }
      })
      .then(res => {
        console.log(res.data);
      });
  });
  return <div>Hi</div>;
};

export default Playlist;

Playlist.propTypes = {
  token: PropTypes.string
};
