import React from 'react';
import './App.css';
import '@nui/material-theme/dist/index.css'
import '@nui/desktop/src/shell';
import CollabCard from './CollabCard.js';

import AppShell, {
  AppShellTopBar,
  AppShellBody,
  AppShellContent,
} from '@nui/plugin-react-app-shell';

const App = () => {
  return (
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

          <CollabCard></CollabCard>

        </AppShellContent>
      </AppShellBody>
    </AppShell>
  )
};

export default App;