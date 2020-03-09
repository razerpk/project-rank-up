import React, { useState } from 'react';
import BuildingTable from '../buildingTable/BuildingTable';
import Missions from '../missions/Missions';
import './ContentTabs.scss';

const ContentTabs = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = tab => setCurrentTab(tab);

  return (
    <>
      <div className='tabs'>
        <label
          className={currentTab === 0 ? 'label-tab active' : 'label-tab'}
          onClick={() => handleTabChange(0)}
        >
          Buildings
        </label>
        <label
          className={currentTab === 1 ? 'label-tab active' : 'label-tab'}
          onClick={() => handleTabChange(1)}
        >
          Missions
        </label>
      </div>
      {currentTab === 0 && (
        <div>
          <BuildingTable />
        </div>
      )}
      {currentTab === 1 && (
        <div>
          <Missions />
        </div>
      )}
    </>
  );
};

export default ContentTabs;
