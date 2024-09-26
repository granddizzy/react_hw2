import React from 'react';
import UsersList from "./components/UsersList";
import {Route, BrowserRouter, Routes, NavLink} from "react-router-dom";
import UserProfile from "./components/UserDetail";
import {GlobalStyles} from "@mui/material";
import './css/styles.css';
import Main from "./components/Main";

function App() {
  const getLinkStyle = ({isActive}) => ({
    color: (isActive ? '#FFD700' : '#ccc'),
    '&:hover': {
      color: '#FFD700',
    },
  });

  const globalThemeStyles = {
    body: {
      backgroundColor: 'rgb(51, 51, 51)',
      color: '#fff',
    },
  }

  const baseUrl = '';

  return (
    <>
      <GlobalStyles styles={globalThemeStyles}/>
      <BrowserRouter basename={baseUrl}>
        <nav className="nav">
          <NavLink to="/" className="nav-link" style={getLinkStyle}>
            Главная страница
          </NavLink> |
          <NavLink to="/users" className="nav-link" style={getLinkStyle}>
            Пользователи
          </NavLink> |
        </nav>
        <Routes>
          <Route path="/users" element={<UsersList/>}/>
          <Route path="/user/:userId" element={<UserProfile/>}/>
          <Route path="/" element={<Main baseUrl={baseUrl}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;