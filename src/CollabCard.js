import React from 'react';
import './App.css';
import '@nui/material-theme/dist/index.css'
import './CollabCard.css'
import '@nui/plugin-react-app-shell/dist/index.css';
import PropTypes from 'prop-types';
import '@material/react-card/dist/card.css';
import MaterialIcon from 'material-icons-react';

import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "@material/react-card";


const CollabCard = ({ title, subtitle, msg }) => {
  return (
    <div className="collabCard">
      <Card className="card">
        <CardPrimaryContent>
          <CardMedia square imageUrl='./my/fancy/image.png' />
        </CardPrimaryContent>
      </Card>
      <div className="container">
        <MaterialIcon icon="account_circle" size={28} />
        <h3>Title</h3>
      </div>
    </div>
  )
};

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  msg: PropTypes.string,
};

export default CollabCard;