import React from 'react';
import './App.css';
import '@nui/material-theme/dist/index.css'
import '@nui/desktop/src/shell';
import CollabCard from './CollabCard.js';
import Header from './Header.js';

import {
  Cell,
  Grid,
  Row,
} from '@material/react-layout-grid';

const App = () => {
  return (
    <div className="App">

      {/* body */}
      <body>
        <Header>

        </Header>
        <Grid>
          <Row>
            <Cell><CollabCard title="Title"></CollabCard></Cell>
            <Cell><CollabCard title="Title"></CollabCard></Cell>
            <Cell><CollabCard title="Title"></CollabCard></Cell>
            <Cell><CollabCard title="Title"></CollabCard></Cell>
            <Cell><CollabCard title="Title"></CollabCard></Cell>
            <Cell><CollabCard title="Title"></CollabCard></Cell>
          </Row>
        </Grid>
      </body>

    </div>
  )
};

export default App;