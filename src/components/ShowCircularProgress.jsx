import React from 'react';
import {Box, CircularProgress} from '@mui/material';

const ShowCircularProgress = () => {
  return (
    <Box
      sx={{
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress color="inherit"/>
    </Box>
  );
}

export default ShowCircularProgress;
