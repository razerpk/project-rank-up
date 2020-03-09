import React from 'react';
import UserStatsTable from './../userStatsTable/UserStatsTable';
import { AppBar, Button, LinearProgress, Toolbar } from '@material-ui/core';
import './TopMenu.scss';

const TopMenu = ({ saveData, seconds, userStats }) => {
  return (
    <AppBar className='topmenu-appbar' position='relative'>
      <Toolbar>
        <b>Project Rank Up</b>
        <Button className='menu-right' onClick={() => saveData()}>
          Save
        </Button>
        <b>playtime {seconds} s</b>
      </Toolbar>
      <UserStatsTable />
      <div className='stamina-bar'>
        {
          <LinearProgress
            id='bar'
            variant='determinate'
            color='secondary'
            value={(userStats.xp / userStats.xpToLevel) * 100}
            label={`Xp: ${userStats.xp}/${userStats.xpToLevel}`}
          />
        }
      </div>
      <div className='xp-bar'>
        {
          <LinearProgress
            variant='determinate'
            color='primary'
            value={(userStats.stamina.value / userStats.stamina.max) * 100}
            label={`Stamina: ${userStats.stamina.value}/${userStats.stamina.max}`}
          />
        }
      </div>
    </AppBar>
  );
};

export default TopMenu;
