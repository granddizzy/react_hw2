import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../redux/usersSlice';
import {List, ListItem, ListItemText, Typography, CircularProgress, Box, Paper} from '@mui/material';

const UsersList = () => {
  const dispatch = useDispatch();
  const {users, loading, error} = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#121212',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Пользователи
      </Typography>
      {loading && <CircularProgress color="inherit"/>}
      {error && <Typography color="error">Error: {error}</Typography>}
      <List sx={{width: '100%', maxWidth: 600}}>
        {users.map((user) => (
          <Paper
            key={user.id}
            elevation={3}
            sx={{
              marginBottom: '10px',
              backgroundColor: '#1e1e1e',
              color: '#fff',
            }}
          >
            <ListItem>
              <ListItemText primary={user.name} secondary={user.email}
                            primaryTypographyProps={{color: '#fff'}}
                            secondaryTypographyProps={{color: 'gold'}}/>
            </ListItem>
          </Paper>
        ))}
      </List>
    </Box>
  );
};

export default UsersList;