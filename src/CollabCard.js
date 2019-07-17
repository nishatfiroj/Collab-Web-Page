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
} from "@material/react-card";

const CollabCard = ({ title, subtitle, msg }) => {
  return (
    <div className="collabCard">

      <Card className="card">
        <CardPrimaryContent>
          <CardMedia square imageUrl='./test.png' />
        </CardPrimaryContent>
      </Card>

      {/* Headline of Collab Card */}
      <span className="headline">
        <MaterialIcon icon="account_circle" size={24} color="#0f7a86" />
        <h3>{title}</h3>
        <MaterialIcon icon="favorite_border" size={24} color="#0f7a86" favorite="favorite_border" />
      </span>
    </div>
  )
};

CollabCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  msg: PropTypes.string,
};

export default CollabCard;