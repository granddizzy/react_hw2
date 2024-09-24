import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUser} from '../redux/userSlice';
import {Box, Button, Paper, Typography} from '@mui/material';
import {NavLink, useParams} from "react-router-dom";
import ShowError from "./ShowError";
import ShowCircularProgress from "./ShowCircularProgress";

const UserDetail = () => {
  const {userId} = useParams();
  const dispatch = useDispatch();
  const {user, loading, error} = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  if (loading) return (<ShowCircularProgress/>);
  if (error) return (<ShowError error={error}/>);

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
        Данные пользователя
      </Typography>
      <NavLink to="/users" style={{textDecoration: 'none'}}>
        <Button
          variant="contained"
          color="primary"
          sx={{marginBottom: '20px'}}
        >
          Назад
        </Button>
      </NavLink>
      {user ? (
        <Paper
          elevation={3}
          sx={{
            padding: '20px',
            backgroundColor: '#1e1e1e',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5">{user.name}</Typography>
          <Typography sx={{color: 'gold'}}>{user.email}</Typography>
        </Paper>
      ) : (
        <Typography>Пользователь не найден.</Typography>
      )}
    </Box>
  );
};

export default UserDetail;
