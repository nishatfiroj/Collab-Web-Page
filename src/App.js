import React from 'react';
import './App.css';
import '@nui/material-theme/dist/index.css'
import '@nui/desktop/src/shell';
import CollabCard from './CollabCard/CollabCard.js';
import Header from './Header/Header.js';
import Container from '@material-ui/core/Container';

import {
  Cell,
  Grid,
  Row,
} from '@material/react-layout-grid';

const App = () => {
  return (
    <div className="App">
      <Container>
        {/* body */}
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

      </Container>
    </div>
  )
};

export default App;