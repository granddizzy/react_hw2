import React from 'react';
import {Box, Typography} from '@mui/material';

const ShowError = ({error}) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography color="error">Error: {error}</Typography>
    </Box>
  );
}

export default ShowError;
