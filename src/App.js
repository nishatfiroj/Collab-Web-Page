import React from 'react';
import './App.css';
import '@nui/desktop/dist/css/nui.min.css';
import '@nui/material-theme/dist/index.css'
import '@nui/desktop/src/shell';

import AppShell, {
  AppShellTopBar,
  AppShellBody,
  AppShellContent,
} from '@nui/plugin-react-app-shell';

import {
  Card,
  CardContent,
  CardImage,
} from '@nui/desktop-react/lib'

const App = () => (
  <AppShell>

    {/* nav */}
    <AppShellTopBar
      title={<img className="logo" src={require('./Img/logo.svg')} alt="Collab Logo" />}
      actions={[
        <div class="icons">
          <img src={require('./Img/account_icon.svg')} alt="Log In" />
        </div>
      ]}
    />

    {/* body */}
    <AppShellBody>
      <AppShellContent>
        <Card>
          <CardContent>
            <CardImage _ref="./Img/Testing/1.jpg" />
          </CardContent>
        </Card>
      </AppShellContent>
    </AppShellBody>
  </AppShell>

);

export default App;