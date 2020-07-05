import React from 'react';
import ReactDOM from 'react-dom';
//import './index.scss';
import App from './App';
import { BuildingsProvider } from './stores/BuildingsProvider'
import { MissionsProvider } from './stores/MissionsProvider'
import { UserStatsProvider } from './stores/UserStatsProvider'
import { ResourcesProvider } from './stores/ResourcesProvider'

const render = () => {
  ReactDOM.render(
    <BuildingsProvider>
      <MissionsProvider>
        <UserStatsProvider>
          <ResourcesProvider>
            <App />
          </ResourcesProvider>
        </UserStatsProvider>
      </MissionsProvider>
    </BuildingsProvider>,
    document.getElementById('root')
  );
};

render();

