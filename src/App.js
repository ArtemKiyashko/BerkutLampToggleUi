import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import './App.css'

function App() {
  const [clicked, setClicked] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const handleIconClick = async (id) => {
    if (!isLoading) {
      setLoading(true);
      await fetch("https://amberkutweprivate.azure-api.net/berkutlamp/toggle")
        .then(response => {
          if (response.ok)
            setClicked(!clicked);
        })
        .catch(error => {
          console.error('There was an error!', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  React.useEffect(() => {
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();
  });

  return (
    <Box>
      <video autoplay="autoplay" muted id="berkut-stream" class="video-js vjs-big-play-centered" preload="auto" fluid="true" data-setup='{}' 
      style={{position: 'absolute', top: '0', left: '0', zIndex: '-1000', width: '100%', height: '100%'}}>
        <source src="http://solyanka.asuscomm.com:18088/hls/stream.m3u8" type="application/x-mpegURL" />
      </video>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <IconButton onClick={handleIconClick}>
          {clicked ? <ToggleOnIcon color='primary' sx={{ width: '100%', height: '100%' }} /> : <ToggleOffIcon color='primary' sx={{ width: '100%', height: '100%' }} />}
        </IconButton>
      </Box>
    </Box>
  );
}

export default App;
