import React from 'react';
import '@nui/material-theme/dist/index.css'
import './Header.css'
import '@nui/plugin-react-app-shell/dist/index.css';
import '@material/react-card/dist/card.css';
import MaterialIcon from 'material-icons-react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import {
  Cell,
  Grid,
  Row,
} from '@material/react-layout-grid';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const buttonStyle = makeStyles({
  root: {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#0f7a86',
    color: '#0f7a86',
    padding: '5px 30px 5px 30px',

  }
});

const filterStyles = makeStyles({
  root: {
    color: '#0f7a86',
  }
});

const dialogStyles = makeStyles({
  root: {
    width: '1000px',
  }
});

const Header = () => {
  const buttonClass = buttonStyle();
  const filterClass = filterStyles();
  const dialogClass = dialogStyles();

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="head">
      <Container>
        <div className="top-nav-bar">
          <img className="logo" src={require('./logo.svg')} alt="Collab Logo" />
          <div class="icons">
            <Grid>
              <Row>
                <Cell columns={6}>
                  <Button classes={{ root: filterClass.root, }}> <MaterialIcon icon="search" size={24} color="#0f7a86" /> Search</Button>
                  <Button className="butt" classes={{ root: buttonClass.root, }} onClick={handleClickOpen}>
                    Upload
                  </Button>
                </Cell>
                <Cell columns={6}><MaterialIcon icon="account_circle" size={32} color="#0f7a86" /></Cell>
              </Row>
            </Grid>
          </div>
        </div>

        <Dialog
          classes={{ root: dialogClass.root }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title"> </DialogTitle>
          <DialogContent className="aligned">
            <img src={require('./card.svg')} alt="Collab Logo" />
          </DialogContent>
        </Dialog>

        <div className="bottom-nav-bar">
          <Grid>
            <Row>
              <Cell columns={2} color="primary" className="nav-bar-text"><Button classes={{ root: filterClass.root, }} className="butt">All</Button></Cell>
              <Cell columns={2} color="primary" className="nav-bar-text"><Button classes={{ root: filterClass.root, }} className="butt">Retail</Button></Cell>
              <Cell columns={2} color="primary" className="nav-bar-text"><Button classes={{ root: filterClass.root, }} className="butt">Platform</Button></Cell>
              <Cell columns={2} color="primary" className="nav-bar-text"><Button classes={{ root: filterClass.root, }} className="butt">NUI</Button></Cell>
              <Cell columns={2} color="primary" className="nav-bar-text"><Button classes={{ root: filterClass.root, }} className="butt">Finance</Button></Cell>
              <Cell columns={2} color="primary" className="nav-bar-text"><Button classes={{ root: filterClass.root, }} className="butt"> Hospitality</Button></Cell>
            </Row>
          </Grid>
        </div>
      </Container>
    </div>
  )
};

export default Header;