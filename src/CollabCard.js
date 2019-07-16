import React from 'react';
import './App.css';
import '@nui/material-theme/dist/index.css'
import './CollabCard.css'
import '@nui/plugin-react-app-shell/dist/index.css';
import PropTypes from 'prop-types';
import '@material/react-card/dist/card.css';

import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "@material/react-card";


const CollabCard = ({ title, subtitle, msg }) => {
  return (
    <Card>
      <CardPrimaryContent>
        <CardMedia square imageUrl='./my/fancy/image.png' />
      </CardPrimaryContent>


      <CardActions>
        <CardActionButtons>
          <button>Click Me</button>
        </CardActionButtons>

        <CardActionIcons>
          <i>Click Me Too!</i>
        </CardActionIcons>
      </CardActions>
    </Card>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  msg: PropTypes.string,
};

export default CollabCard;