import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

function App() {
  const [clicked, setClicked] = React.useState(false);
  const handleIconClick = async (id) => {
    await fetch("https://faberkutlampserviceneprivate.azurewebsites.net/api/toggle?code=j3FIHPQlN7Hj4RREOVcoJVN_OoGAV19ODfG7MQr8liB8AzFuYydYVQ%3D%3D")
      .catch(error => {
        console.error('There was an error!', error);
      });
    setClicked(!clicked);
  }

  React.useEffect(() => {
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();
  });

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <IconButton onClick={handleIconClick}>
        {clicked ? <ToggleOnIcon color='primary' sx={{ width: '100%', height: '100%' }} /> : <ToggleOffIcon color='primary' sx={{ width: '100%', height: '100%' }} />}
      </IconButton>
    </Box>
  );
}

export default App;
