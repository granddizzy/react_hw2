import React from 'react';
import {ListItem, ListItemText, Paper} from '@mui/material';
import {NavLink} from "react-router-dom";

const UsersListItem = ({user}) => {
  return (
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
    </NavLink>);
};

export default UsersListItem;