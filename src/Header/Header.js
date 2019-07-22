import React from 'react';
import '@nui/material-theme/dist/index.css'
import './Header.css'
import '@nui/plugin-react-app-shell/dist/index.css';
import '@material/react-card/dist/card.css';
import MaterialIcon from 'material-icons-react';
import Button from '@material-ui/core/Button';

import {
  Cell,
  Grid,
  Row,
} from '@material/react-layout-grid';

// import Dialog, {
//   DialogTitle,
//   DialogContent,
//   DialogFooter,
//   DialogButton,
// } from '@material/react-dialog';


const Header = () => {
  return (
    <div className="head">

      <div className="top-nav-bar">
        <img className="logo" src={require('./logo.svg')} alt="Collab Logo" />
        <div class="icons">
          <Grid>
            <Row>
              <Cell columns={6}><Button className="upload" variant="outlined" color="primary" >Upload</Button></Cell>
              <Cell columns={6}><MaterialIcon icon="account_circle" size={32} color="#0f7a86" /></Cell>
            </Row>
          </Grid>
        </div>
      </div>

      <div className="bottom-nav-bar">
        <Grid>
          <Row>
            <Cell columns={2} color="primary"><Button>All</Button></Cell>
            <Cell columns={2} color="primary"><Button>Retail</Button></Cell>
            <Cell columns={2} color="primary"><Button>Platform</Button></Cell>
            <Cell columns={2} color="primary"><Button>NUI</Button></Cell>
            <Cell columns={2} color="primary"><Button>Finance</Button></Cell>
            <Cell columns={2} color="primary"><Button>Hospitality</Button></Cell>
          </Row>
        </Grid>
      </div>
    </div>
  )
};

export default Header;