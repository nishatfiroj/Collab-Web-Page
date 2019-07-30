import React from 'react';
import '../App.css';
import '@nui/material-theme/dist/index.css'
import './CollabCard.css'
import '@nui/plugin-react-app-shell/dist/index.css';
import PropTypes from 'prop-types';
import '@material/react-card/dist/card.css';
import MaterialIcon from 'material-icons-react';
import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import Card, {
  CardPrimaryContent,
  CardMedia,
} from "@material/react-card";

const useStyles = makeStyles({
  root: {
    padding: '0rem 5rem 0rem 5rem',
  }
});

const CollabCard = ({ title, msg, source, author }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="collabCard">

      {/* Card Media */}
      <Card className="card">
        <CardPrimaryContent>
          <CardMedia
            square
            imageUrl={source}
            onClick={handleClickOpen}
          />
        </CardPrimaryContent>
      </Card>

      {/* Headline of Collab Card */}
      <span className="headline">
        <MaterialIcon icon="account_circle" size={24} color="#0f7a86" />
        <h3>{title}</h3>
        <MaterialIcon icon="favorite_border" size={24} color="#0f7a86" favorite="favorite_border" />
      </span>

      {/* Dialog that opens up */}
      <Dialog classes={{ root: classes.root, }} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" className="dialog">
        <DialogTitle id="alert-dialog-title">
          <h2>{title}</h2>
          <h4>{author}</h4>
        </DialogTitle>

        <DialogContent children className="dialog" >
          <Card>
            <CardPrimaryContent>
              <CardMedia className="dialogCard" square imageUrl={source} />
            </CardPrimaryContent>
          </Card>
          <DialogContentText id="alert-dialog-description"><p>{msg}</p></DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
};

CollabCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  msg: PropTypes.string,
};

export default CollabCard;