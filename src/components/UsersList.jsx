import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../redux/usersSlice1';
import {List, Typography, Box} from '@mui/material';
import ShowError from "./ShowError";
import UsersListItem from "./UsersListItem";
import ShowCircularProgress from "./ShowCircularProgress";

const UsersList = () => {
  const dispatch = useDispatch();
  const {users, loading, error} = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers('https://jsonplaceholder.typicode.com/users'));
  }, []);

  return (<Box
    sx={{
      minHeight: '85vh',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '20px',
    }}
  >
    <Typography variant="h4" gutterBottom>
      Пользователи
    </Typography>
    {loading && <ShowCircularProgress/>}
    {error && <ShowError error={error}/>}
    <List sx={{width: '100%', maxWidth: 600}}>
      {users.map((user) => (<UsersListItem user={user}/>))}
    </List>
  </Box>);
};

export default UsersList;