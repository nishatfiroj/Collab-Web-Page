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
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  root: {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#0f7a86',
    color: '#0f7a86',
    padding: '0rem, 1rem, 0rem, 1rem',
  }
});

const Header = () => {
  const classes = useStyles();
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
                  <Button classes={{ root: classes.root, }} onClick={handleClickOpen}>
                    Upload
                  </Button>
                </Cell>
                <Cell columns={6}><MaterialIcon icon="account_circle" size={32} color="#0f7a86" /></Cell>
              </Row>
            </Grid>
          </div>
        </div>

        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title"> </DialogTitle>
          <DialogContent className="aligned">
            <MaterialIcon icon="cloud_upload" size={187} color="#0f7a86"></MaterialIcon>
            <DialogContentText><h5>DROP YOUR FILES HERE</h5></DialogContentText>
            <DialogContentText><p>Or Click Here To Upload Your Files</p></DialogContentText>
          </DialogContent>
        </Dialog>

        <div className="bottom-nav-bar">
          <Grid>
            <Row>
              <Cell columns={2} color="primary" className="nav-bar-text"><Button>All</Button></Cell>
              <Cell columns={2} color="primary" className="nav-bar-text"><Button>Retail</Button></Cell>
              <Cell columns={2} color="primary" className="nav-bar-text"><Button>Platform</Button></Cell>
              <Cell columns={2} color="primary" className="nav-bar-text"><Button>NUI</Button></Cell>
              <Cell columns={2} color="primary" className="nav-bar-text"><Button>Finance</Button></Cell>
              <Cell columns={2} color="primary" className="nav-bar-text"><Button>Hospitality</Button></Cell>
            </Row>
          </Grid>
        </div>
      </Container>
    </div>
  )
};

export default Header;