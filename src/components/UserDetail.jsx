import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUser} from '../redux/userSlice';
import {Box, Button, Paper, Typography} from '@mui/material';
import {NavLink, useNavigate, useParams} from "react-router-dom";
import ShowError from "./ShowError";
import ShowCircularProgress from "./ShowCircularProgress";

const UserDetail = () => {
  const {userId} = useParams();
  const dispatch = useDispatch();
  const {user, loading, error} = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUser(`https://jsonplaceholder.typicode.com/users/${userId}`));
  }, [dispatch, userId]);

  const handleGoBack = () => {
    navigate(-1); // Вернуться на предыдущую страницу в истории
  };

  return (
    <Box
      sx={{
        minHeight: '85vh',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '20px',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Данные пользователя
      </Typography>
      {/*<NavLink to="/users" style={{textDecoration: 'none'}}>*/}
      <Button
        variant="contained"
        color="primary"
        sx={{marginBottom: '20px'}}
        onClick={handleGoBack}
      >
        Назад
      </Button>
      {/*</NavLink>*/}
      {loading && <ShowCircularProgress/>}
      {error && <ShowError error={error}/>}
      {!loading && !error && user ? (
        <Paper
          elevation={3}
          sx={{
            padding: '20px',
            backgroundColor: 'rgb(85, 85, 85)',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5">{user.name}</Typography>
          <Typography sx={{color: 'gold'}}>{user.email}</Typography>
        </Paper>
      ) : (
        !loading && <Typography>Пользователь не найден.</Typography>
      )}
    </Box>
  );
};

export default UserDetail;
