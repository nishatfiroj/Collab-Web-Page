import React from 'react';
import './App.css';
import '@nui/material-theme/dist/index.css'
import './CollabCard.css'
import '@nui/plugin-react-app-shell/dist/index.css';
import '@material/react-card/dist/card.css';
import MaterialIcon from 'material-icons-react';
import Button from '@material/react-button';

const Header = () => {
  return (
    <div className="Header">
      <img className="logo" src={require('./Img/logo.svg')} alt="Collab Logo" />
      <div class="icons">
        <MaterialIcon icon="account_circle" size={28} color="#0f7a86" />
      </div>
      <div className="nav-bar">
        <Button>asdf</Button>
        <Button>fdas</Button>
        <Button>dsda</Button>
        <Button>ffff</Button>
      </div>
    </div>
  )
};

export default Header;