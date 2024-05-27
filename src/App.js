import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import BgImage from './img/background3.jpeg'
import BgImageDark from './img/background3-lightsoff2.jpeg'

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
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: `${clicked ? `url(${BgImage})` : `url(${BgImageDark})`}`,
      backgroundSize: 'contain'}}>
      <IconButton onClick={handleIconClick}>
        {clicked ? <ToggleOnIcon color='primary' sx={{ width: '100%', height: '100%' }} /> : <ToggleOffIcon color='primary' sx={{ width: '100%', height: '100%' }} />}
      </IconButton>
      <Box id='bgPreLoader' sx={{display: 'hidden', backgroundImage: `url(${BgImage})`}}></Box>
    </Box>
  );
}

export default App;
