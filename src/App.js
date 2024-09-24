import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import UsersList from "./components/UsersList";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import UserProfile from "./components/UserDetail";
import {GlobalStyles} from "@mui/material";
import './css/styles.css';

function App() {
  const dispatch = useDispatch();
  const {users, loading, error} = useSelector((state) => state.users);

  // useEffect(() => {
  //   dispatch({type: 'FETCH_USERS_REQUEST'});
  // }, []);

  const globalThemeStyles = {
    body: {
      backgroundColor: '#fff',
      color: '#000',
    }
  }

  const baseUrl = '';

  return (
    <>
      <GlobalStyles styles={globalThemeStyles}/>
      <BrowserRouter basename={baseUrl}>
        <Routes>
          <Route path="/users" element={<UsersList/>}/>
          <Route path="/user/:userId" element={<UserProfile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;