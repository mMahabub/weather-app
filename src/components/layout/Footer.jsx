import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }}>
      <Typography variant="body2" align="center">
        {'© ' + new Date().getFullYear()}
        {' Weather App'}
      </Typography>
    </Box>
  );
}