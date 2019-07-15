import React from 'react';
import './App.css';
import '@nui/material-theme/dist/index.css'
import '@nui/plugin-react-app-shell/dist/index.css';
import '@nui/material-theme/dist/index.css';
import PropTypes from 'prop-types';

const Card = ({ title, subtitle, msg }) => {
  return (
    <div>
      <div class="nui-card">
        <div class="nui-card__flag">
          <span class="nui-status-indicator nui-js-tooltip" aria-label="Status Label" data-nui-status="active"></span>
        </div>
        <div class="nui-card__content">


        </div>
      </div>

      <div class="row">
        <div class="col">
          <img src={require('./Img/account_icon.svg')} alt="Log In" />
        </div>
        <div class="col">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  msg: PropTypes.string,
};

export default Card;