import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = '';
const redirectUri = 'http://localhost:3000';
const scopes = ['user-read-currently-playing', 'user-read-playback-state'];

const App = () => {
  const [token, setToken] = useState();
  useEffect(() => {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if (!hashParams.access_token) {
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&scope=${scopes.join(
        '%20'
      )}&response_type=token&redirect_uri=${redirectUri}`;
    } else {
      setToken(hashParams.access_token);
    }
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {
          token &&
            'Logged in' /* here goes the code/components that a user sees when they are logged in */
        }
      </header>
    </div>
  );
};
export default App;
