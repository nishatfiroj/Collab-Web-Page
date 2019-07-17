import React from 'react';
import './App.css';
import '@nui/material-theme/dist/index.css'
import './CollabCard.css'
import '@nui/plugin-react-app-shell/dist/index.css';
import '@material/react-card/dist/card.css';
import MaterialIcon from 'material-icons-react';
import Button from '@material/react-button';

import {
  Cell,
  Grid,
  Row,
} from '@material/react-layout-grid';

const Header = () => {
  return (
    <div>
      <div className="head">
        <div className="top-nav-bar">
          <img className="logo" src={require('./Img/logo.svg')} alt="Collab Logo" />
          <div class="icons">
            <Button className="upload" outlined="true" icon={<div><MaterialIcon icon="cloud_upload" color="#0f7a86" /></div>}>Upload</Button>

            <MaterialIcon icon="account_circle" size={32} color="#0f7a86" />
          </div>
        </div>
        <div className="bottom-nav-bar">
          <Grid>
            <Row>
              <Cell columns={2}><Button>All</Button></Cell>
              <Cell columns={2}><Button>Retail</Button></Cell>
              <Cell columns={2}><Button>Platform</Button></Cell>
              <Cell columns={2}><Button>NUI</Button></Cell>
              <Cell columns={2}><Button>Finance</Button></Cell>
              <Cell columns={2}><Button>Hospitality</Button></Cell>
            </Row>
          </Grid>
        </div>
      </div>

    </div>
  )
};

export default Header;