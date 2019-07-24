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
      {/* body */}
      <Header />
      <Container>
        <Grid>
          <Row>
            <Cell><CollabCard title="Lucy Larcom" source="https://cdn.dribbble.com/users/59947/screenshots/6835329/muti-1.jpg"></CollabCard></Cell>
            <Cell><CollabCard title="New Moon Product!" source="https://cdn.dribbble.com/users/478776/screenshots/6834285/moon-intimate-gel_4x.jpg"></CollabCard></Cell>
            <Cell><CollabCard title="Anno Table" source="https://cdn.dribbble.com/users/1720296/screenshots/6815590/dribbble_shot_4x.jpg"></CollabCard></Cell>
            <Cell><CollabCard title="Recipe app design" source="https://cdn.dribbble.com/users/1725092/screenshots/6804284/shot_2_4x.png"></CollabCard></Cell>
            <Cell><CollabCard title="Shape Up." source="https://cdn.dribbble.com/users/1253590/screenshots/6800301/shapeup._4x.jpg"></CollabCard></Cell>
            <Cell><CollabCard title="Black Canyon" source="https://cdn.dribbble.com/users/59947/screenshots/6798392/muti_dribbble-800x600.jpg"></CollabCard></Cell>
            <Cell><CollabCard title="Cryptocurrency Exchange App" source="https://cdn.dribbble.com/users/563897/screenshots/6786982/3_screens_crypto_4x.png"></CollabCard></Cell>
            <Cell><CollabCard title="Egg" source="https://cdn.dribbble.com/users/60166/screenshots/6778091/egg_4x.jpg"></CollabCard></Cell>
            <Cell><CollabCard title="Heart" source="https://cdn.dribbble.com/users/60166/screenshots/6738449/heart_4x.jpg"></CollabCard></Cell>
            <Cell><CollabCard title="Healthy. Medical booking app" source="https://cdn.dribbble.com/users/1558435/screenshots/6692217/healthy_4x.png"></CollabCard></Cell>
            <Cell><CollabCard title="Wizard" source="https://cdn.dribbble.com/users/59947/screenshots/6804441/muti.jpg"></CollabCard></Cell>
            <Cell><CollabCard title="Forbes Japan" source="https://cdn.dribbble.com/users/59947/screenshots/6822492/muti_dribbble-1800x1200_4x.jpg"></CollabCard></Cell>
          </Row>
        </Grid>
      </Container>
    </div>
  )
};

export default App;