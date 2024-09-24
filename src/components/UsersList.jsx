import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../redux/usersSlice';
import {List, ListItem, ListItemText, Typography, CircularProgress, Box, Paper, Link} from '@mui/material';
import {NavLink} from "react-router-dom";

const UsersList = () => {
  const dispatch = useDispatch();
  const {users, loading, error} = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (<Box
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
    {loading && <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#121212',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress color="inherit"/>
    </Box>}
    {error && <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#121212',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography color="error">Error: {error}</Typography>
    </Box>}
    <List sx={{width: '100%', maxWidth: 600}}>
      {users.map((user) => (
        <NavLink to={`/user/${user.id}`} key={user.id} style={{textDecoration: 'none', color: 'inherit'}}>
          <Paper
            key={user.id}
            elevation={3}
            sx={{
              marginBottom: '10px', backgroundColor: '#1e1e1e', color: '#fff',
            }}
          >
            <ListItem>
              <ListItemText primary={user.name}
                            primaryTypographyProps={{color: '#fff'}}
                            />
            </ListItem>
          </Paper>
        </NavLink>))}
    </List>
  </Box>);
};

export default UsersList;